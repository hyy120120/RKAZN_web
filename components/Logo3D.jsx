"use client";

import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";
import { useMemo, useRef } from "react";

// SVG canvas ka pura white background rectangle — ise hamesha discard karna hai
const isBackgroundWhite = (c) => c.r > 0.98 && c.g > 0.98 && c.b > 0.98;

// Halka/off-white shape jo asal me letter ke andar ka "hole" (khaali jagah) represent karta hai
const isHoleColor = (c) =>
  !isBackgroundWhite(c) && c.r > 0.85 && c.g > 0.85 && c.b > 0.85;

function getShapeBounds(shape) {
  const box = new THREE.Box2();
  shape.getPoints().forEach((pt) => box.expandByPoint(pt));
  return box;
}

export default function Logo3D() {
  const groupRef = useRef();

  const { mouse } = useThree();

  const svg = useLoader(SVGLoader, "/logo.svg");

  const logo = useMemo(() => {
    const meshGroup = new THREE.Group(); // meshes yahan add honge
    const group = new THREE.Group(); // ye outer wrapper scale/rotate karega

    // Har path ke shapes nikaal lo, aur color ke hisaab se category tay karo
    const parsed = svg.paths
      .map((path) => ({
        path,
        color: new THREE.Color(path.color),
        shapes: SVGLoader.createShapes(path),
      }))
      .filter((entry) => !isBackgroundWhite(entry.color)); // pura canvas background hata do

    // Hole-color wale shapes ko unke sahi "parent" solid shape me real hole ke roop me jod do
    parsed.forEach((entry) => {
      if (!isHoleColor(entry.color)) return;

      entry.shapes.forEach((holeShape) => {
        const holeBounds = getShapeBounds(holeShape);

        let bestParent = null;
        let bestArea = Infinity;

        parsed.forEach((candidate) => {
          if (isHoleColor(candidate.color)) return; // dusra hole parent nahi ban sakta

          candidate.shapes.forEach((solidShape) => {
            const bounds = getShapeBounds(solidShape);
            const area = (bounds.max.x - bounds.min.x) * (bounds.max.y - bounds.min.y);

            if (bounds.containsBox(holeBounds) && area < bestArea) {
              bestArea = area;
              bestParent = solidShape;
            }
          });
        });

        if (bestParent) {
          bestParent.holes.push(new THREE.Path(holeShape.getPoints()));
        }
      });
    });

    // Ab sirf solid (non-hole) shapes ko mesh banao — hole shapes khud render nahi honge,
    // unka kaam sirf upar wale parent me "cut" karna tha
    parsed.forEach(({ path, color, shapes }, pathIndex) => {
      if (isHoleColor(color)) return;

      const hsl = {};
color.getHSL(hsl);
const isAccentColor = hsl.s > 0.15;

const material = new THREE.MeshPhysicalMaterial({
  color: isAccentColor ? color : new THREE.Color("#d8d8d8"),
  metalness: isAccentColor ? 0.55 : 0.9,
  roughness: isAccentColor ? 0.45 : 0.22,
  clearcoat: isAccentColor ? 0.4 : 1,
  clearcoatRoughness: 0.2,
  envMapIntensity: isAccentColor ? 1.3 : 2.2,
  ior: 1.5,
  transmission: 0,
  reflectivity: 1,
  side: THREE.DoubleSide,
  polygonOffset: true,
  polygonOffsetFactor: -pathIndex,
  polygonOffsetUnits: -pathIndex,
});

      shapes.forEach((shape) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 12,
          bevelEnabled: true,
          bevelThickness: 0.8,
          bevelSize: 0.35,
          bevelSegments: 3,
          curveSegments: 6,
        });

        geometry.computeVertexNormals();

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        meshGroup.add(mesh);
      });
    });

    // Center complete logo (unscaled inner group ke andar)
    const box = new THREE.Box3().setFromObject(meshGroup);
    const center = box.getCenter(new THREE.Vector3());
    meshGroup.position.set(-center.x, -center.y, -center.z);

    group.add(meshGroup); // outer group ke andar inner group daala

    // Initial Apple style tilt
    group.rotation.x = 0;

    // Hero Scale
    group.scale.setScalar(0.012);
    group.scale.y *= -1;

    return group;
  }, [svg]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Sirf horizontal (Y-axis) rotation — kuch aur move nahi hoga
    groupRef.current.rotation.y += delta * 0.6;
  });

  return <primitive ref={groupRef} object={logo} />;
}