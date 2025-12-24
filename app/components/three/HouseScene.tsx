"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { HouseModel } from "./HouseModel";
import { Environment } from "./Environment";
import { Ground } from "./Ground";
import { useScrollProgress } from "@/lib/hooks/useScrollProgress";
import * as THREE from "three";

// Camera controller that zooms in and rotates based on scroll
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // Start position: far and high, looking at scene from angle
    // End position: closer, lower, more focused on house
    const startPos = { x: 25, y: 15, z: 25 };
    const endPos = { x: 8, y: 5, z: 12 };

    // Interpolate camera position based on scroll
    const targetX = THREE.MathUtils.lerp(startPos.x, endPos.x, scrollProgress);
    const targetY = THREE.MathUtils.lerp(startPos.y, endPos.y, scrollProgress);
    const targetZ = THREE.MathUtils.lerp(startPos.z, endPos.z, scrollProgress);

    // Smooth camera movement
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    // Always look at the center of the scene (where the house is)
    camera.lookAt(0, 1, 0);
  });

  return null;
}

function Scene() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Camera animation */}
      <CameraController scrollProgress={scrollProgress} />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-10, 10, -5]} intensity={0.3} />
      <hemisphereLight args={["#87ceeb", "#3d5a4b", 0.5]} />

      {/* Sky color */}
      <color attach="background" args={["#a8d5e5"]} />

      {/* Fog - lighter for better visibility */}
      <fog attach="fog" args={["#a8d5e5", 30, 80]} />

      {/* Scene elements */}
      <Ground />
      <Environment scrollProgress={scrollProgress} />
      <HouseModel scrollProgress={scrollProgress} />
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#d4af37" wireframe />
    </mesh>
  );
}

export function HouseScene() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [25, 15, 25], fov: 50 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
