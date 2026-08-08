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

const LOGO_HALF_WIDTH = 5.6;
const BASE_FOV = 32;

const GRAVITY = -14;
const RESTITUTION = 0.5;
const FLOOR_Y = -0.3;
const DROP_START_Y = 15;
const MAX_BOUNCES = 3;
const BALL_COUNT = 4;
const MAX_START_DELAY = 1.4; // har ball randomly 0 - 1.4s ke beech shuru hogi
const BALL_X_SPREAD = 2.4; // -2.4 se +2.4 ke beech randomly kahin bhi

const ORB_BURST_SECONDS = 0.4;

// Sab balls white, sirf ek ball tera logo-accent color leke aayegi
function useBallConfigs() {
  return useMemo(() => {
    const accentIndex = Math.floor(Math.random() * BALL_COUNT);
    return Array.from({ length: BALL_COUNT }).map((_, i) => ({
      x: (Math.random() * 2 - 1) * BALL_X_SPREAD,
      delay: Math.random() * MAX_START_DELAY,
      color: i === accentIndex ? "#8fe0f2" : "#f4f4f4",
    }));
  }, []);
}

function ResponsiveCameraRig() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!size.width || !size.height) return;

    const aspect = size.width / size.height;
    const fovRad = (BASE_FOV * Math.PI) / 180;
    const marginFactor = 1.35;

    let distance;
    if (aspect < 1) {
      distance = (LOGO_HALF_WIDTH * marginFactor) / (Math.tan(fovRad / 2) * aspect);
    } else {
      distance = 14;
    }

    camera.fov = BASE_FOV;
    camera.position.z = THREE.MathUtils.clamp(distance, 10, 70);
    camera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
}

// ---------------------------------------------------------------------------
// Balls upar se girti hain (gravity), floor pe bounce karti hain (3 baar,
// har bounce pe kam height), phir "onAllBounced" call hota hai
// ---------------------------------------------------------------------------

function DroppingBalls({ balls, onAllBounced }) {
  const orbRefs = useRef([]);

  const elapsedTimeRef = useRef(0);
  const posY = useRef(balls.map(() => DROP_START_Y));
  const velY = useRef(balls.map(() => 0));
  const bounceCounts = useRef(balls.map(() => 0));
  const doneRef = useRef(false);

  useFrame((state, delta) => {
    if (doneRef.current) return;
    const dt = Math.min(delta, 0.033);
    elapsedTimeRef.current += dt;

    balls.forEach((ball, i) => {
      const orb = orbRefs.current[i];
      if (!orb) return;

      const hasStarted = elapsedTimeRef.current >= ball.delay;

      if (!hasStarted) {
        orb.visible = false;
        return;
      }

      orb.visible = true;

      velY.current[i] += GRAVITY * dt;
      posY.current[i] += velY.current[i] * dt;

      if (posY.current[i] <= FLOOR_Y && velY.current[i] < 0) {
        posY.current[i] = FLOOR_Y;
        velY.current[i] = -velY.current[i] * RESTITUTION;
        bounceCounts.current[i] += 1;
      }

      orb.position.set(ball.x, posY.current[i], 0);

      const speed = Math.abs(velY.current[i]);
      const squash = THREE.MathUtils.clamp(1 - speed * 0.012, 0.8, 1.2);
      orb.scale.set(1 / squash, squash, 1 / squash);
    });

    const allDone = bounceCounts.current.every((c) => c >= MAX_BOUNCES);
    if (allDone && !doneRef.current) {
      doneRef.current = true;
      onAllBounced?.();
    }
  });

  return (
    <group>
      {balls.map((ball, i) => (
        <mesh key={i} ref={(el) => (orbRefs.current[i] = el)} position={[ball.x, DROP_START_Y, 0]}>
          <sphereGeometry args={[0.26, 24, 24]} />
          <meshBasicMaterial
            color={ball.color}
            transparent
            opacity={1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Burst — teesre bounce ke baad balls fat jaati hain
// ---------------------------------------------------------------------------

function BurstBalls({ balls }) {
  const orbRefs = useRef([]);
  const shockRef = useRef();
  const startRef = useRef(null);

  useFrame((state) => {
    if (startRef.current === null) startRef.current = state.clock.elapsedTime;
    const elapsed = state.clock.elapsedTime - startRef.current;
    const t = Math.min(elapsed / ORB_BURST_SECONDS, 1);

    balls.forEach((ball, i) => {
      const orb = orbRefs.current[i];
      if (!orb) return;
      orb.position.set(ball.x, FLOOR_Y, 0);
      orb.scale.setScalar(THREE.MathUtils.lerp(1, 4.5, t));
      orb.material.opacity = Math.max(0, 1 - t * 1.3);
    });

    if (shockRef.current) {
      const scale = THREE.MathUtils.lerp(0.2, 6, t);
      shockRef.current.scale.setScalar(scale);
      shockRef.current.material.opacity = Math.max(0, 0.8 * (1 - t));
    }
  });

  return (
    <group>
      {balls.map((ball, i) => (
        <mesh key={i} ref={(el) => (orbRefs.current[i] = el)} position={[ball.x, FLOOR_Y, 0]}>
          <sphereGeometry args={[0.26, 24, 24]} />
          <meshBasicMaterial
            color={ball.color}
            transparent
            opacity={1}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      <mesh ref={shockRef} position={[0, FLOOR_Y, 0]} rotation-x={Math.PI / 2}>
        <ringGeometry args={[0.9, 1, 48]} />
        <meshBasicMaterial
          color="#8fe0f2"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Particle logo assembly
// ---------------------------------------------------------------------------

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

  const { positions, basePositions, targets, colors, delays, count } = useMemo(() => {
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
    const finalDelays = new Float32Array(total); // har particle apne alag time pe move karega

    for (let i = 0; i < total; i++) {
      const x = (rawTargets[i * 3] - center.x) * SCALE;
      const y = -(rawTargets[i * 3 + 1] - center.y) * SCALE;
      const z = rawTargets[i * 3 + 2] * SCALE * 0.3;

      finalTargets[i * 3] = x;
      finalTargets[i * 3 + 1] = y;
      finalTargets[i * 3 + 2] = z;

      // Particles ab burst point (floor center) ke aas-paas se hi nikalte hain
      const dir = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize();
      const r = SCATTER_RADIUS * (0.15 + Math.random() * 0.85);

      finalBase[i * 3] = dir.x * r;
      finalBase[i * 3 + 1] = FLOOR_Y + dir.y * r;
      finalBase[i * 3 + 2] = dir.z * r;

      // Kuch particles turant chalna shuru karenge, kuch thodi der baad —
      // isse ek rigid "block" ki jagah organic swarm jaisa lagega
      finalDelays[i] = Math.random() * 0.45;
    }

    return {
      positions: finalBase.slice(),
      basePositions: finalBase,
      targets: finalTargets,
      colors: new Float32Array(rawColors),
      delays: finalDelays,
      count: total,
    };
  }, [svg]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    if (startTimeRef.current === null) startTimeRef.current = state.clock.elapsedTime;

    const elapsed = state.clock.elapsedTime - startTimeRef.current;
    const globalFrac = Math.min(elapsed / CONVERGE_SECONDS, 1);

    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;

      // Har particle apne "delay" ke baad hi move karna shuru karta hai,
      // par sab exactly globalFrac=1 pe pahunch ke settle ho jaate hain
      const startFrac = delays[i];
      const localT = Math.max(0, (globalFrac - startFrac) / (1 - startFrac));
      const eased = 1 - Math.pow(1 - localT, 3);

      arr[ix] = THREE.MathUtils.lerp(basePositions[ix], targets[ix], eased);
      arr[ix + 1] = THREE.MathUtils.lerp(basePositions[ix + 1], targets[ix + 1], eased);
      arr[ix + 2] = THREE.MathUtils.lerp(basePositions[ix + 2], targets[ix + 2], eased);
    }
    posAttr.needsUpdate = true;

    if (globalFrac >= 1 && !settledRef.current) {
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

// ---------------------------------------------------------------------------
// Master sequence: dropping -> burst -> forming -> holding -> fading
// ---------------------------------------------------------------------------

export default function Preloader3D() {
  const [phase, setPhase] = useState("dropping");
  const [hidden, setHidden] = useState(false);
  const firedRef = useRef(false);
  const balls = useBallConfigs();

  const handleAllBounced = () => {
    setPhase("burst");
    setTimeout(() => setPhase("forming"), ORB_BURST_SECONDS * 1000);
  };

  const handleSettled = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    setTimeout(() => setPhase("holding"), 100);
    setTimeout(() => setPhase("fading"), 900);
    setTimeout(() => setHidden(true), 1700);
  };

  if (hidden) return null;

  const showBalls = phase === "dropping";
  const showBurst = phase === "burst";
  const showLogo = phase === "forming" || phase === "holding" || phase === "fading";

  const captionText =
    phase === "dropping"
      ? "INITIALIZING CORE UNITS"
      : phase === "burst"
      ? "CORE ACTIVATED"
      : phase === "forming"
      ? "BUILDING RKAZN CORE"
      : "SYSTEM READY";

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

        {showBalls && <DroppingBalls balls={balls} onAllBounced={handleAllBounced} />}
        {showBurst && <BurstBalls balls={balls} />}
        {showLogo && <ParticleLogo onSettled={handleSettled} />}

        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.15} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>

      <div className="preloader3d-caption">{captionText}</div>
    </div>
  );
}