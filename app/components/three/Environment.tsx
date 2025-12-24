"use client";

import { useMemo } from "react";

interface EnvironmentProps {
  scrollProgress: number;
}

// Fence Post Component with animation
function FencePost({
  position,
  progress,
}: {
  position: [number, number, number];
  progress: number;
}) {
  if (progress <= 0) return null;

  const height = progress * 1;
  const opacity = progress;

  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[0.1, height, 0.1]} />
        <meshStandardMaterial
          color="#8B4513"
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

// Fence Rail Component with animation
function FenceRail({
  start,
  end,
  height,
  progress,
}: {
  start: [number, number, number];
  end: [number, number, number];
  height: number;
  progress: number;
}) {
  if (progress <= 0) return null;

  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[2] - start[2], 2)
  );
  const midX = (start[0] + end[0]) / 2;
  const midZ = (start[2] + end[2]) / 2;
  const angle = Math.atan2(end[2] - start[2], end[0] - start[0]);

  return (
    <mesh
      position={[midX, height * progress, midZ]}
      rotation={[0, -angle + Math.PI / 2, 0]}
    >
      <boxGeometry args={[0.05, 0.08, length * progress]} />
      <meshStandardMaterial color="#A0522D" transparent opacity={progress} />
    </mesh>
  );
}

// Animated Fence Section
function Fence({ scrollProgress }: { scrollProgress: number }) {
  // Fence appears from 10% to 40% scroll
  const fenceProgress = Math.max(0, Math.min((scrollProgress - 0.1) / 0.3, 1));

  if (fenceProgress <= 0) return null;

  const posts: [number, number, number][] = [];
  const fenceSize = 8;
  const postSpacing = 1.5;

  // Front fence (with gap for entrance)
  for (let x = -fenceSize / 2; x <= -1.5; x += postSpacing) {
    posts.push([x, 0, fenceSize / 2]);
  }
  for (let x = 1.5; x <= fenceSize / 2; x += postSpacing) {
    posts.push([x, 0, fenceSize / 2]);
  }

  // Back fence
  for (let x = -fenceSize / 2; x <= fenceSize / 2; x += postSpacing) {
    posts.push([x, 0, -fenceSize / 2]);
  }

  // Left fence
  for (let z = -fenceSize / 2 + postSpacing; z < fenceSize / 2; z += postSpacing) {
    posts.push([-fenceSize / 2, 0, z]);
  }

  // Right fence
  for (let z = -fenceSize / 2 + postSpacing; z < fenceSize / 2; z += postSpacing) {
    posts.push([fenceSize / 2, 0, z]);
  }

  return (
    <group>
      {posts.map((pos, i) => (
        <FencePost key={i} position={pos} progress={fenceProgress} />
      ))}
      {/* Top rails */}
      <FenceRail start={[-4, 0, 4]} end={[-1.5, 0, 4]} height={0.8} progress={fenceProgress} />
      <FenceRail start={[1.5, 0, 4]} end={[4, 0, 4]} height={0.8} progress={fenceProgress} />
      <FenceRail start={[-4, 0, -4]} end={[4, 0, -4]} height={0.8} progress={fenceProgress} />
      <FenceRail start={[-4, 0, -4]} end={[-4, 0, 4]} height={0.8} progress={fenceProgress} />
      <FenceRail start={[4, 0, -4]} end={[4, 0, 4]} height={0.8} progress={fenceProgress} />
      {/* Bottom rails */}
      <FenceRail start={[-4, 0, 4]} end={[-1.5, 0, 4]} height={0.3} progress={fenceProgress} />
      <FenceRail start={[1.5, 0, 4]} end={[4, 0, 4]} height={0.3} progress={fenceProgress} />
      <FenceRail start={[-4, 0, -4]} end={[4, 0, -4]} height={0.3} progress={fenceProgress} />
      <FenceRail start={[-4, 0, -4]} end={[-4, 0, 4]} height={0.3} progress={fenceProgress} />
      <FenceRail start={[4, 0, -4]} end={[4, 0, 4]} height={0.3} progress={fenceProgress} />
    </group>
  );
}

// Street Light Component with animation
function StreetLight({
  position,
  scrollProgress,
}: {
  position: [number, number, number];
  scrollProgress: number;
}) {
  // Street lights appear from 50% to 70% scroll
  const lightProgress = Math.max(0, Math.min((scrollProgress - 0.5) / 0.2, 1));

  if (lightProgress <= 0) return null;

  const poleHeight = lightProgress * 3;
  const lightIntensity = Math.max(0, (scrollProgress - 0.7) / 0.3) * 2; // Light turns on after 70%

  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, poleHeight / 2, 0]}>
        <cylinderGeometry args={[0.08, 0.1, poleHeight, 8]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={lightProgress}
        />
      </mesh>

      {/* Arm - appears when pole is tall enough */}
      {lightProgress > 0.8 && (
        <mesh position={[0.4, poleHeight - 0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={lightProgress}
          />
        </mesh>
      )}

      {/* Lamp housing */}
      {lightProgress > 0.9 && (
        <>
          <mesh position={[0.7, poleHeight - 0.1, 0]}>
            <boxGeometry args={[0.3, 0.15, 0.2]} />
            <meshStandardMaterial
              color="#333333"
              metalness={0.5}
              roughness={0.3}
              transparent
              opacity={lightProgress}
            />
          </mesh>

          {/* Light bulb (emissive) */}
          <mesh position={[0.7, poleHeight - 0.2, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#fff5e0"
              emissive="#fff5e0"
              emissiveIntensity={lightIntensity}
              transparent
              opacity={lightProgress}
            />
          </mesh>

          {/* Point light for actual illumination */}
          {lightIntensity > 0 && (
            <pointLight
              position={[0.7, poleHeight - 0.3, 0]}
              intensity={lightIntensity * 0.5}
              color="#fff5e0"
              distance={8}
              decay={2}
            />
          )}
        </>
      )}
    </group>
  );
}

// Road Component with animation
function Road({ scrollProgress }: { scrollProgress: number }) {
  // Road appears from 0% to 20% scroll
  const roadProgress = Math.max(0, Math.min(scrollProgress / 0.2, 1));

  if (roadProgress <= 0) return null;

  const roadLength = roadProgress * 20;
  const opacity = roadProgress;

  return (
    <group position={[0, 0.05, 6]}>
      {/* Main road - extends from center */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[roadLength, 3]} />
        <meshStandardMaterial color="#3a3a3a" roughness={0.9} transparent opacity={opacity} />
      </mesh>

      {/* Center line */}
      {roadProgress > 0.5 && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <planeGeometry args={[roadLength * 0.8, 0.1]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={opacity} />
        </mesh>
      )}

      {/* Driveway - appears later */}
      {roadProgress > 0.7 && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -2.5]}>
          <planeGeometry args={[2.5, 2]} />
          <meshStandardMaterial color="#4a4a4a" roughness={0.85} transparent opacity={opacity} />
        </mesh>
      )}
    </group>
  );
}

// Sidewalk Component with animation
function Sidewalk({ scrollProgress }: { scrollProgress: number }) {
  // Sidewalk appears from 15% to 35% scroll
  const sidewalkProgress = Math.max(0, Math.min((scrollProgress - 0.15) / 0.2, 1));

  if (sidewalkProgress <= 0) return null;

  return (
    <group position={[0, 0.08, 4.2]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12 * sidewalkProgress, 1]} />
        <meshStandardMaterial color="#9a9a9a" roughness={0.8} transparent opacity={sidewalkProgress} />
      </mesh>
    </group>
  );
}

export function Environment({ scrollProgress }: EnvironmentProps) {
  return (
    <group>
      <Road scrollProgress={scrollProgress} />
      <Sidewalk scrollProgress={scrollProgress} />
      <Fence scrollProgress={scrollProgress} />
      <StreetLight position={[5, 0, 5]} scrollProgress={scrollProgress} />
      <StreetLight position={[-5, 0, 5]} scrollProgress={scrollProgress} />
    </group>
  );
}
