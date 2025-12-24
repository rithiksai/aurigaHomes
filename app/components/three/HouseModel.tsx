"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HouseModelProps {
  scrollProgress: number;
}

export function HouseModel({ scrollProgress }: HouseModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Progress for each part (staggered appearance)
  const foundationProgress = Math.max(0, Math.min((scrollProgress - 0.05) / 0.1, 1)); // 5-15%
  const wallsProgress = Math.max(0, Math.min((scrollProgress - 0.15) / 0.15, 1)); // 15-30%
  const windowsProgress = Math.max(0, Math.min((scrollProgress - 0.30) / 0.1, 1)); // 30-40%
  const doorProgress = Math.max(0, Math.min((scrollProgress - 0.35) / 0.1, 1)); // 35-45%
  const roofProgress = Math.max(0, Math.min((scrollProgress - 0.45) / 0.15, 1)); // 45-60%
  const chimneyProgress = Math.max(0, Math.min((scrollProgress - 0.60) / 0.1, 1)); // 60-70%
  const porchProgress = Math.max(0, Math.min((scrollProgress - 0.70) / 0.15, 1)); // 70-85%

  // Slight rotation as house builds
  const targetRotation = scrollProgress * 0.3; // Gentle rotation

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Foundation - rises from ground */}
      {foundationProgress > 0 && (
        <mesh
          position={[0, foundationProgress * 0.15, 0]}
          scale={[1, foundationProgress, 1]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[6, 0.3, 5]} />
          <meshStandardMaterial color="#1a3a2e" roughness={0.8} />
        </mesh>
      )}

      {/* Main House Body - walls rise up */}
      {wallsProgress > 0 && (
        <mesh
          position={[0, 0.3 + (wallsProgress * 1.5), 0]}
          scale={[1, wallsProgress, 1]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[5.5, 3, 4.5]} />
          <meshStandardMaterial color="#fafaf7" roughness={0.6} />
        </mesh>
      )}

      {/* Windows - pop in with scale */}
      {windowsProgress > 0 && (
        <group position={[0, 2.2, 2.26]} scale={windowsProgress}>
          {/* Left window */}
          <mesh position={[-1.5, 0, 0]}>
            <boxGeometry args={[0.9, 0.9, 0.1]} />
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} roughness={0.1} />
          </mesh>
          <mesh position={[-1.5, 0, 0.06]}>
            <boxGeometry args={[0.95, 0.05, 0.02]} />
            <meshStandardMaterial color="#fafaf7" />
          </mesh>
          <mesh position={[-1.5, 0, 0.06]}>
            <boxGeometry args={[0.05, 0.95, 0.02]} />
            <meshStandardMaterial color="#fafaf7" />
          </mesh>

          {/* Right window */}
          <mesh position={[1.5, 0, 0]}>
            <boxGeometry args={[0.9, 0.9, 0.1]} />
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} roughness={0.1} />
          </mesh>
          <mesh position={[1.5, 0, 0.06]}>
            <boxGeometry args={[0.95, 0.05, 0.02]} />
            <meshStandardMaterial color="#fafaf7" />
          </mesh>
          <mesh position={[1.5, 0, 0.06]}>
            <boxGeometry args={[0.05, 0.95, 0.02]} />
            <meshStandardMaterial color="#fafaf7" />
          </mesh>
        </group>
      )}

      {/* Side Windows */}
      {windowsProgress > 0 && (
        <>
          <mesh position={[2.76, 2.2, 0]} scale={windowsProgress}>
            <boxGeometry args={[0.1, 0.9, 0.9]} />
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} roughness={0.1} />
          </mesh>
          <mesh position={[-2.76, 2.2, 0]} scale={windowsProgress}>
            <boxGeometry args={[0.1, 0.9, 0.9]} />
            <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} roughness={0.1} />
          </mesh>
        </>
      )}

      {/* Front Door - slides up */}
      {doorProgress > 0 && (
        <group>
          <mesh
            position={[0, 0.3 + doorProgress * 0.8, 2.26]}
            scale={[1, doorProgress, 1]}
            castShadow
          >
            <boxGeometry args={[1, 2, 0.1]} />
            <meshStandardMaterial color="#3d5a4b" roughness={0.7} />
          </mesh>
          {/* Door handle */}
          {doorProgress > 0.8 && (
            <mesh position={[0.35, 1.1, 2.35]} scale={doorProgress}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
            </mesh>
          )}
        </group>
      )}

      {/* Roof - descends from above */}
      {roofProgress > 0 && (
        <group position={[0, 3.3 + (1 - roofProgress) * 3, 0]}>
          {/* Left roof panel */}
          <mesh
            position={[-1.5, 0.7, 0]}
            rotation={[0, 0, Math.PI / 4]}
            castShadow
          >
            <boxGeometry args={[3, 0.15, 5]} />
            <meshStandardMaterial
              color="#d4af37"
              roughness={0.5}
              transparent
              opacity={roofProgress}
            />
          </mesh>
          {/* Right roof panel */}
          <mesh
            position={[1.5, 0.7, 0]}
            rotation={[0, 0, -Math.PI / 4]}
            castShadow
          >
            <boxGeometry args={[3, 0.15, 5]} />
            <meshStandardMaterial
              color="#d4af37"
              roughness={0.5}
              transparent
              opacity={roofProgress}
            />
          </mesh>
          {/* Front gable */}
          <mesh position={[0, 0.5, 2.3]}>
            <boxGeometry args={[3 * roofProgress, 1.2 * roofProgress, 0.15]} />
            <meshStandardMaterial color="#fafaf7" roughness={0.6} />
          </mesh>
          {/* Back gable */}
          <mesh position={[0, 0.5, -2.3]}>
            <boxGeometry args={[3 * roofProgress, 1.2 * roofProgress, 0.15]} />
            <meshStandardMaterial color="#fafaf7" roughness={0.6} />
          </mesh>
        </group>
      )}

      {/* Chimney - rises up */}
      {chimneyProgress > 0 && (
        <mesh
          position={[1.8, 3.6 + chimneyProgress * 0.6, -1]}
          scale={[1, chimneyProgress, 1]}
          castShadow
        >
          <boxGeometry args={[0.6, 1.2, 0.6]} />
          <meshStandardMaterial color="#8B4513" roughness={0.9} />
        </mesh>
      )}

      {/* Front Porch - builds up */}
      {porchProgress > 0 && (
        <group>
          {/* Porch floor */}
          <mesh
            position={[0, 0.35, 3]}
            scale={[porchProgress, 1, porchProgress]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[3, 0.1, 1.5]} />
            <meshStandardMaterial color="#8B4513" roughness={0.8} />
          </mesh>

          {/* Porch pillars - grow up */}
          {porchProgress > 0.3 && (
            <>
              <mesh
                position={[-1.3, 0.4 + porchProgress * 0.7, 3.5]}
                scale={[1, porchProgress, 1]}
                castShadow
              >
                <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
                <meshStandardMaterial color="#fafaf7" roughness={0.6} />
              </mesh>
              <mesh
                position={[1.3, 0.4 + porchProgress * 0.7, 3.5]}
                scale={[1, porchProgress, 1]}
                castShadow
              >
                <cylinderGeometry args={[0.1, 0.1, 1.5, 8]} />
                <meshStandardMaterial color="#fafaf7" roughness={0.6} />
              </mesh>
            </>
          )}

          {/* Porch roof - appears last */}
          {porchProgress > 0.7 && (
            <mesh
              position={[0, 1.9, 3.3]}
              scale={porchProgress}
              castShadow
            >
              <boxGeometry args={[3.2, 0.1, 1.8]} />
              <meshStandardMaterial
                color="#d4af37"
                roughness={0.5}
                transparent
                opacity={(porchProgress - 0.7) / 0.3}
              />
            </mesh>
          )}
        </group>
      )}
    </group>
  );
}
