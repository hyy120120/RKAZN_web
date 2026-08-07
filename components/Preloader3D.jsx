"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";
import * as THREE from "three";

const TOTAL_PARTICLES = 4500;
const SCATTER_RADIUS = 16;
const CONVERGE_SECONDS = 2.6;

// Tera logo.svg ka known world-space half-width (SCALE=0.012 apply hone ke baad),
// thoda margin ke saath — isi se camera decide karta hai kitna door rehna hai
const LOGO_HALF_WIDTH = 5.6;
const BASE_FOV = 32;

function ResponsiveCameraRig() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!size.width || !size.height) return;

    const aspect = size.width / size.height;
    const fovRad = (BASE_FOV * Math.PI) / 180;
    const marginFactor = 1.35;

    let distance;
    if (aspect < 1) {
      // Portrait / mobile — width ke hisaab se fit karo taaki dono side se logo na kate
      distance = (LOGO_HALF_WIDTH * marginFactor) / (Math.tan(fovRad / 2) * aspect);
    } else {
      // Landscape / desktop — normal comfortable distance
      distance = 14;
    }

    camera.fov = BASE_FOV;
    camera.position.z = THREE.MathUtils.clamp(distance, 10, 70);
    camera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
}

const isBackgroundWhite = (c) => c.r > 0.98 && c.g > 0.98 && c.b > 0.98;
const isHoleColor = (c) => !isBackgroundWhite(c) && c.r > 0.85 && c.g > 0.85 && c.b > 0.85;

function shapeArea(shape) {
  const pts = shape.getPoints();
  let area = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    area += a.x * b.y - b.x * a.y;
  }
  return Math.abs(area / 2);
}

function ParticleLogo({ onSettled }) {
  const svg = useLoader(SVGLoader, "/logo.svg");
  const pointsRef = useRef();
  const startTimeRef = useRef(null);
  const settledRef = useRef(false);

  // basePositions = scatter ki shuruaati jagah (kabhi mutate nahi hoti, sirf lerp source hai)
  // positions = geometry ka actual buffer (har frame update hota hai)
  const { positions, basePositions, targets, colors, count } = useMemo(() => {
    const entries = svg.paths
      .map((path) => ({
        path,
        color: new THREE.Color(path.color),
        shapes: SVGLoader.createShapes(path),
      }))
      .filter((e) => !isBackgroundWhite(e.color) && !isHoleColor(e.color));

    const shapeInfos = [];
    let totalArea = 0;

    entries.forEach((entry) => {
      const hsl = {};
      entry.color.getHSL(hsl);
      const isAccent = hsl.s > 0.15;
      entry.shapes.forEach((shape) => {
        const area = shapeArea(shape);
        totalArea += area;
        shapeInfos.push({ shape, area, isAccent });
      });
    });

    const rawTargets = [];
    const rawColors = [];

    const accentColor = new THREE.Color("#6fc7dd");
    const metalColor = new THREE.Color("#e6e6e6");

    shapeInfos.forEach(({ shape, area, isAccent }) => {
      const n = Math.max(4, Math.round((area / totalArea) * TOTAL_PARTICLES));
      const geo = new THREE.ShapeGeometry(shape, 8);
      const mesh = new THREE.Mesh(geo);
      const sampler = new MeshSurfaceSampler(mesh).build();
      const p = new THREE.Vector3();

      for (let i = 0; i < n; i++) {
        sampler.sample(p);
        rawTargets.push(p.x, p.y, (Math.random() - 0.5) * 40);
        const c = isAccent ? accentColor : metalColor;
        rawColors.push(c.r, c.g, c.b);
      }
    });

    const total = rawTargets.length / 3;

    const box = new THREE.Box3();
    for (let i = 0; i < total; i++) {
      box.expandByPoint(new THREE.Vector3(rawTargets[i * 3], rawTargets[i * 3 + 1], 0));
    }
    const center = box.getCenter(new THREE.Vector3());

    const SCALE = 0.012;
    const finalTargets = new Float32Array(total * 3);
    const finalBase = new Float32Array(total * 3);

    for (let i = 0; i < total; i++) {
      const x = (rawTargets[i * 3] - center.x) * SCALE;
      const y = -(rawTargets[i * 3 + 1] - center.y) * SCALE; // SVG Y neeche hoti hai, three.js me upar — flip zaroori
      const z = rawTargets[i * 3 + 2] * SCALE * 0.3;

      finalTargets[i * 3] = x;
      finalTargets[i * 3 + 1] = y;
      finalTargets[i * 3 + 2] = z;

      const dir = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize();
      const r = SCATTER_RADIUS * (0.4 + Math.random() * 0.6);

      finalBase[i * 3] = dir.x * r;
      finalBase[i * 3 + 1] = dir.y * r;
      finalBase[i * 3 + 2] = dir.z * r;
    }

    return {
      positions: finalBase.slice(), // ye geometry attribute banega (mutable copy)
      basePositions: finalBase, // ye kabhi nahi badlega (lerp origin)
      targets: finalTargets,
      colors: new Float32Array(rawColors),
      count: total,
    };
  }, [svg]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    if (startTimeRef.current === null) startTimeRef.current = state.clock.elapsedTime;

    const elapsed = state.clock.elapsedTime - startTimeRef.current;
    const t = Math.min(elapsed / CONVERGE_SECONDS, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic — shuru me fast, end me smooth settle

    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix] = THREE.MathUtils.lerp(basePositions[ix], targets[ix], eased);
      arr[ix + 1] = THREE.MathUtils.lerp(basePositions[ix + 1], targets[ix + 1], eased);
      arr[ix + 2] = THREE.MathUtils.lerp(basePositions[ix + 2], targets[ix + 2], eased);
    }
    posAttr.needsUpdate = true;

    pointsRef.current.rotation.y = Math.sin(elapsed * 0.3) * 0.06 * (1 - eased * 0.7);

    if (t >= 1 && !settledRef.current) {
      settledRef.current = true;
      onSettled?.();
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Preloader3D() {
  const [phase, setPhase] = useState("forming"); // forming -> holding -> fading
  const [hidden, setHidden] = useState(false);
  const firedRef = useRef(false);

  const handleSettled = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    setTimeout(() => setPhase("holding"), 100);
    setTimeout(() => setPhase("fading"), 900);
    setTimeout(() => setHidden(true), 1700);
  };

  if (hidden) return null;

  return (
    <div className={`preloader3d ${phase === "fading" ? "preloader3d-fade" : ""}`}>
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 14], fov: 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#08090a"]} />
        <ResponsiveCameraRig />
        <ambientLight intensity={1} />
        <ParticleLogo onSettled={handleSettled} />
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>

      <div className="preloader3d-caption">
        {phase === "forming" ? "ASSEMBLING DIGITAL IDENTITY" : "SYSTEM READY"}
      </div>
    </div>
  );
}