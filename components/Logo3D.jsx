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
    const group = new THREE.Group();

    // Remove white background paths only
    const paths = svg.paths.filter((path) => {
      const color = new THREE.Color(path.color);

      return !(
        color.r > 0.98 &&
        color.g > 0.98 &&
        color.b > 0.98
      );
    });

    paths.forEach((path) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(path.color),

        metalness: 0.9,

        roughness: 0.22,

        clearcoat: 1,

        clearcoatRoughness: 0.08,

        envMapIntensity: 2.2,

        ior: 1.5,

        transmission: 0,

        reflectivity: 1,

        side: THREE.DoubleSide,
      });

      const shapes = SVGLoader.createShapes(path);

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

        const mesh = new THREE.Mesh(
          geometry,
          material
        );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        group.add(mesh);
      });
    });

    // Center complete logo
    const box = new THREE.Box3().setFromObject(group);

    const center = box.getCenter(
      new THREE.Vector3()
    );

    group.position.set(
      -center.x,
      -center.y,
      -center.z
    );

    // Initial Apple style tilt
    group.rotation.x = -0.18;

    // Hero Scale
    group.scale.setScalar(0.045);
    group.scale.y *= -1;

    return group;
  }, [svg]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth Auto Rotation
    groupRef.current.rotation.y += delta * 0.6;

    // Floating
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.4) *
      0.35;

    // Mouse Tilt
    const targetX =
      -0.18 + mouse.y * 0.12;

    const targetZ =
      mouse.x * 0.08;

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.08
      );

    groupRef.current.rotation.z =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetZ,
        0.08
      );
  });

  return (
    <primitive
      ref={groupRef}
      object={logo}
    />
  );
}