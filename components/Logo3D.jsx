"use client";

import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";
import { useMemo, useRef } from "react";

export default function Logo3D() {
  const groupRef = useRef();

  const { mouse } = useThree();

  const svg = useLoader(SVGLoader, "/logo.svg");

  const logo = useMemo(() => {
    const meshGroup = new THREE.Group(); // meshes yahan add honge
    const group = new THREE.Group();     // ye outer wrapper scale/rotate karega

    // Remove white background paths only
    const paths = svg.paths.filter((path) => {
      const color = new THREE.Color(path.color);
      return !(color.r > 0.99 && color.g > 0.99 && color.b > 0.99);
    });

    paths.forEach((path, pathIndex) => {
  const baseColor = new THREE.Color(path.color);

  // Saturation check — teal accent ka saturation zyada hai, gray/black letters ka ~0
  const hsl = { h: 0, s: 0, l: 0 };
  baseColor.getHSL(hsl);
  const isAccent = hsl.s > 0.15;

  // Letters: asli dark/black color waisa hi rakho (brand accuracy)
  // Accent (teal): thoda saturate + bright karke pop dena
  const displayColor = isAccent
    ? baseColor.clone().offsetHSL(0, 0.15, 0.08)
    : baseColor.clone();

  const material = new THREE.MeshPhysicalMaterial({
    color: displayColor,
    metalness: isAccent ? 0.6 : 0.85,
    roughness: isAccent ? 0.18 : 0.25,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: isAccent ? 2.5 : 3.2,
    ior: 1.5,
    transmission: 0,
    reflectivity: 1,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -pathIndex,
    polygonOffsetUnits: -pathIndex,
  });

  const shapes = SVGLoader.createShapes(path);

  shapes.forEach((shape) => {
    const geometry = new THREE.ExtrudeGeometry(shape, {
  depth: 22,
  bevelEnabled: true,
  bevelThickness: 1.4,
  bevelSize: 0.5,
  bevelSegments: 4,
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

  return (
    <primitive
      ref={groupRef}
      object={logo}
    />
  );
}