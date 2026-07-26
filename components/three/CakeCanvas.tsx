"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import CakeModel from "./CakeModel";

export default function CakeCanvas({ interactive = false }: { interactive?: boolean }) {
  const [paused, setPaused] = useState(false);

  // Pause the render loop when tab is hidden (saves battery/CPU).
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 6.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 8, 5]} intensity={2.0} color="#fff3dd" castShadow />
      <directionalLight position={[-5, 3, -4]} intensity={0.7} color="#e7b3c0" />
      <pointLight position={[0, 3, 3]} intensity={1.0} color="#C9A24B" />

      <Suspense fallback={null}>
        <CakeModel paused={paused} orbit={interactive} />
      </Suspense>

      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          rotateSpeed={0.6}
        />
      )}

      <ContactShadows
        position={[0, -1.15, 0]}
        opacity={0.4}
        scale={9}
        blur={2.6}
        far={4}
        color="#2A0A15"
      />

      {/* Procedural studio reflections — no external HDRI required */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={["#1a0710"]} />
        <Lightformer intensity={2.2} position={[0, 4, 3]} scale={[8, 3, 1]} color="#fff2d8" />
        <Lightformer intensity={1.4} position={[-4, 1, 2]} scale={[3, 4, 1]} color="#E7CE8F" />
        <Lightformer intensity={1.1} position={[4, 0, 2]} scale={[3, 4, 1]} color="#f2c9cf" />
        <Lightformer intensity={1.6} position={[0, -2, -4]} scale={[10, 6, 1]} color="#C9A24B" />
      </Environment>
    </Canvas>
  );
}
