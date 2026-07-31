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
  const color = new THREE.Color(path.color);

  // Ye chhota light-gray inlay (A ke andar wala triangle) hai —
  // baaki dark letter-body paths se alag treat karna hai
  const isInlay = color.r > 0.6 && color.g > 0.6 && color.b > 0.6;

  const material = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.9,
    roughness: 0.22,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 2.2,
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
      depth: isInlay ? 12.5 : 12,
      bevelEnabled: !isInlay,
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

  return (
    <primitive
      ref={groupRef}
      object={logo}
    />
  );
}