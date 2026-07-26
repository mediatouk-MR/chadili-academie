"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";

function GoldBand({ y, radius }: { y: number; radius: number }) {
  return (
    <mesh position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.035, 16, 64]} />
      <meshStandardMaterial color="#C9A24B" metalness={1} roughness={0.22} />
    </mesh>
  );
}

function Pearls({ y, radius, count }: { y: number; radius: number; count: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return [Math.cos(a) * radius, y, Math.sin(a) * radius] as [number, number, number];
      }),
    [y, radius, count]
  );
  return (
    <>
      {items.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#E7CE8F" metalness={1} roughness={0.15} />
        </mesh>
      ))}
    </>
  );
}

export default function CakeModel({
  paused = false,
  orbit = false,
}: {
  paused?: boolean;
  orbit?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const logo = useTexture("/images/logo.png", (t) => {
    const tex = Array.isArray(t) ? t[0] : t;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
  });
  const pointer = useRef({ x: 0, y: 0 });

  const cream = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#F7EFE0", roughness: 0.55, metalness: 0.05 }),
    []
  );
  const blush = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#F0D9DA", roughness: 0.5, metalness: 0.05 }),
    []
  );

  useFrame((state, delta) => {
    if (!group.current || paused) return;
    // In orbit mode, OrbitControls drives rotation — skip internal spin/tilt.
    if (orbit) return;
    group.current.rotation.y += delta * 0.28;
    // subtle tilt easing toward pointer
    const px = state.pointer.x;
    const py = state.pointer.y;
    pointer.current.x += (px - pointer.current.x) * 0.05;
    pointer.current.y += (py - pointer.current.y) * 0.05;
    group.current.rotation.z = pointer.current.x * 0.08;
    group.current.rotation.x = -pointer.current.y * 0.06;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6} floatingRange={[-0.08, 0.08]}>
      <group ref={group} position={[0, -0.6, 0]} scale={1.05}>
        {/* Cake stand */}
        <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.75, 1.9, 0.12, 64]} />
          <meshStandardMaterial color="#C9A24B" metalness={1} roughness={0.28} />
        </mesh>
        <mesh position={[0, -0.42, 0]}>
          <cylinderGeometry args={[0.28, 0.5, 0.55, 32]} />
          <meshStandardMaterial color="#A9812F" metalness={1} roughness={0.3} />
        </mesh>

        {/* Bottom tier */}
        <mesh position={[0, 0.5, 0]} material={cream} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 1.0, 64]} />
        </mesh>
        <GoldBand y={0.03} radius={1.5} />
        <GoldBand y={1.0} radius={1.5} />
        <Pearls y={0.06} radius={1.5} count={26} />

        {/* Middle tier (carries the wordmark plaque) */}
        <mesh position={[0, 1.42, 0]} material={blush} castShadow>
          <cylinderGeometry args={[1.05, 1.05, 0.85, 64]} />
        </mesh>
        <GoldBand y={1.02} radius={1.05} />
        <GoldBand y={1.84} radius={1.05} />

        {/* Branded logo medallion on the front of the bottom tier */}
        <group position={[0, 0.55, 1.5]}>
          {/* coin base */}
          <mesh position={[0, 0, -0.01]}>
            <circleGeometry args={[0.4, 48]} />
            <meshStandardMaterial color="#F3E6C8" metalness={0.3} roughness={0.5} />
          </mesh>
          {/* logo face */}
          <mesh>
            <circleGeometry args={[0.37, 48]} />
            <meshStandardMaterial map={logo} roughness={0.5} metalness={0.1} />
          </mesh>
          {/* gold rim */}
          <mesh>
            <torusGeometry args={[0.4, 0.025, 16, 48]} />
            <meshStandardMaterial color="#C9A24B" metalness={1} roughness={0.18} />
          </mesh>
        </group>

        {/* Top tier */}
        <mesh position={[0, 2.18, 0]} material={cream} castShadow>
          <cylinderGeometry args={[0.62, 0.62, 0.7, 48]} />
        </mesh>
        <GoldBand y={1.84} radius={0.62} />
        <GoldBand y={2.53} radius={0.62} />
        <Pearls y={1.87} radius={0.62} count={16} />

        {/* Topper — a stylized gold rose bud */}
        <group position={[0, 2.72, 0]}>
          <mesh>
            <sphereGeometry args={[0.16, 24, 24]} />
            <meshStandardMaterial color="#C9A24B" metalness={1} roughness={0.18} />
          </mesh>
          <mesh position={[0, 0.14, 0]}>
            <coneGeometry args={[0.1, 0.22, 20]} />
            <meshStandardMaterial color="#E7CE8F" metalness={1} roughness={0.15} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
