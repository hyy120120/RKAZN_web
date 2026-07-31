"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import Logo3D from "./Logo3D";

export default function Scene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 28],
        fov: 28,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Transparent Background */}
      <color attach="background" args={["#000000"]} />

      {/* Ambient */}
      <ambientLight intensity={1.2} />

      {/* Main Light */}
      <directionalLight
        castShadow
        position={[8, 10, 12]}
        intensity={3}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill Light */}
      <directionalLight
        position={[-10, 6, -8]}
        intensity={1.5}
      />

      {/* Rim Light */}
      <pointLight
        position={[0, 8, 10]}
        intensity={2}
      />

      {/* HDR Reflection */}
      <Environment preset="warehouse" />

      {/* Floating Logo */}
      <Float
        speed={1.8}
        rotationIntensity={0}
        floatIntensity={0.7}
      >
        <Logo3D />
      </Float>

      {/* Soft Shadow */}
      <ContactShadows
        position={[0, -7, 0]}
        opacity={0.28}
        blur={3}
        scale={25}
        far={20}
      />

      {/* Disable User Rotation */}
      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
      />

      {/* Bloom */}
      <EffectComposer>
        <Bloom
          intensity={0.35}
          luminanceThreshold={0.7}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}