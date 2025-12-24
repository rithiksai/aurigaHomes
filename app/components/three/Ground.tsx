"use client";

export function Ground() {
  return (
    <group>
      {/* Main grass ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#4a7c59" roughness={0.9} />
      </mesh>

      {/* Yard area (lighter grass around house) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#5a8c69" roughness={0.85} />
      </mesh>
    </group>
  );
}
