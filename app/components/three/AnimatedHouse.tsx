"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface AnimatedHouseProps {
  scrollProgress: number;
}

export function AnimatedHouse({ scrollProgress }: AnimatedHouseProps) {
  // Calculate heights based on scroll (0 to 1)
  const foundationHeight = Math.min(scrollProgress * 5, 1) * 0.5; // 0-20% scroll
  const wallHeight = Math.max(0, Math.min((scrollProgress - 0.2) / 0.3, 1)) * 4; // 20-50% scroll
  const windowDoorOpacity = Math.max(0, Math.min((scrollProgress - 0.5) / 0.2, 1)); // 50-70% scroll
  const roofProgress = Math.max(0, Math.min((scrollProgress - 0.7) / 0.3, 1)); // 70-100% scroll

  // Memoize materials for performance
  const materials = useMemo(
    () => ({
      foundation: new THREE.MeshStandardMaterial({ color: "#1a3a2e" }), // Forest
      walls: new THREE.MeshStandardMaterial({ color: "#fafaf7" }), // Cream
      door: new THREE.MeshStandardMaterial({ color: "#3d5a4b" }), // Sage
      window: new THREE.MeshStandardMaterial({
        color: "#87CEEB",
        opacity: 0.7,
        transparent: true,
      }),
      roof: new THREE.MeshStandardMaterial({ color: "#d4af37" }), // Gold
    }),
    []
  );

  return (
    <group position={[0, -2, 0]}>
      {/* Foundation */}
      {foundationHeight > 0 && (
        <mesh position={[0, foundationHeight / 2, 0]}>
          <boxGeometry args={[5, foundationHeight, 5]} />
          <primitive object={materials.foundation} attach="material" />
        </mesh>
      )}

      {/* Walls */}
      {wallHeight > 0 && (
        <>
          {/* Front Wall */}
          <mesh position={[0, 0.5 + wallHeight / 2, 2.4]}>
            <boxGeometry args={[5, wallHeight, 0.2]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>

          {/* Back Wall */}
          <mesh position={[0, 0.5 + wallHeight / 2, -2.4]}>
            <boxGeometry args={[5, wallHeight, 0.2]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>

          {/* Left Wall */}
          <mesh position={[-2.4, 0.5 + wallHeight / 2, 0]}>
            <boxGeometry args={[0.2, wallHeight, 5]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>

          {/* Right Wall */}
          <mesh position={[2.4, 0.5 + wallHeight / 2, 0]}>
            <boxGeometry args={[0.2, wallHeight, 5]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>
        </>
      )}

      {/* Door */}
      {windowDoorOpacity > 0 && wallHeight >= 3 && (
        <mesh position={[0, 0.5 + 1.2, 2.51]}>
          <boxGeometry args={[1, 2.4, 0.1]} />
          <meshStandardMaterial color="#3d5a4b" opacity={windowDoorOpacity} transparent />
        </mesh>
      )}

      {/* Windows */}
      {windowDoorOpacity > 0 && wallHeight >= 2.5 && (
        <>
          {/* Front Left Window */}
          <mesh position={[-1.5, 0.5 + 2.5, 2.51]}>
            <boxGeometry args={[0.8, 0.8, 0.1]} />
            <meshStandardMaterial
              color="#87CEEB"
              opacity={windowDoorOpacity * 0.7}
              transparent
            />
          </mesh>

          {/* Front Right Window */}
          <mesh position={[1.5, 0.5 + 2.5, 2.51]}>
            <boxGeometry args={[0.8, 0.8, 0.1]} />
            <meshStandardMaterial
              color="#87CEEB"
              opacity={windowDoorOpacity * 0.7}
              transparent
            />
          </mesh>

          {/* Side Windows */}
          <mesh position={[-2.51, 0.5 + 2.5, 0]}>
            <boxGeometry args={[0.1, 0.8, 0.8]} />
            <meshStandardMaterial
              color="#87CEEB"
              opacity={windowDoorOpacity * 0.7}
              transparent
            />
          </mesh>

          <mesh position={[2.51, 0.5 + 2.5, 0]}>
            <boxGeometry args={[0.1, 0.8, 0.8]} />
            <meshStandardMaterial
              color="#87CEEB"
              opacity={windowDoorOpacity * 0.7}
              transparent
            />
          </mesh>
        </>
      )}

      {/* Roof */}
      {roofProgress > 0 && wallHeight >= 3.5 && (
        <group position={[0, 0.5 + wallHeight, 0]}>
          {/* Left Roof Panel - slopes inward toward peak */}
          <mesh
            position={[-1.25, roofProgress * 1.0, 0]}
            rotation={[0, 0, Math.PI / 4]}
          >
            <boxGeometry args={[3.5, 0.2, 5.4]} />
            <primitive object={materials.roof} attach="material" />
          </mesh>

          {/* Right Roof Panel - slopes inward toward peak */}
          <mesh
            position={[1.25, roofProgress * 1.0, 0]}
            rotation={[0, 0, -Math.PI / 4]}
          >
            <boxGeometry args={[3.5, 0.2, 5.4]} />
            <primitive object={materials.roof} attach="material" />
          </mesh>

          {/* Front Gable */}
          <mesh position={[0, roofProgress * 0.6, 2.6]}>
            <boxGeometry args={[2.6 * roofProgress, 1.2 * roofProgress, 0.2]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>

          {/* Back Gable */}
          <mesh position={[0, roofProgress * 0.6, -2.6]}>
            <boxGeometry args={[2.6 * roofProgress, 1.2 * roofProgress, 0.2]} />
            <primitive object={materials.walls} attach="material" />
          </mesh>
        </group>
      )}
    </group>
  );
}
