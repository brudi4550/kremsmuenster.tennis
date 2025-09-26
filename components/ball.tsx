"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import * as THREE from "three";
import { useTheme } from "next-themes";

function TennisBallModel({ url, ...props }: { url: string } & React.ComponentProps<"group">) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    ref.current.add(scene);
  }, [scene]);

  return <group ref={ref} {...props} />;
}

export default function TennisBall({
  activeSection,
  setActiveSection,
  sectionTitles,
}: {
  activeSection: number;
  setActiveSection: (idx: number) => void;
  sectionTitles: string[];
}) {
  const controlsRef = useRef<ThreeOrbitControls>(null);
  const lastAngleRef = useRef<number | null>(null);
  const accumulatedRef = useRef<number>(0);
  const ignoreInputRef = useRef<boolean>(false);
  const [snap, setSnap] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleControlsChange = () => {
    if (!controlsRef.current || ignoreInputRef.current) return;
    const angle = controlsRef.current.getAzimuthalAngle(); // -PI to PI

    if (lastAngleRef.current === null) {
      lastAngleRef.current = angle;
      return;
    }

    // Calculate delta, handling wrap-around
    let delta = angle - lastAngleRef.current;
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;

    accumulatedRef.current += delta;
    lastAngleRef.current = angle;

    if (accumulatedRef.current >= Math.PI / 1.5) {
      // Temporarily disable controls to prevent pointer issues during section change
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        setTimeout(() => {
          if (controlsRef.current) controlsRef.current.enabled = true;
        }, 50);
      }
      
      setActiveSection((activeSection + 1) % sectionTitles.length);
      accumulatedRef.current = 0;
      setSnap(true);
    }

    if (accumulatedRef.current <= -Math.PI / 1.5) {
      // Temporarily disable controls to prevent pointer issues during section change
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        setTimeout(() => {
          if (controlsRef.current) controlsRef.current.enabled = true;
        }, 50);
      }
      
      setActiveSection((activeSection - 1 + sectionTitles.length) % sectionTitles.length);
      accumulatedRef.current = 0;
      setSnap(true);
    }
  };

  // Remove snap effect after animation
  useEffect(() => {
    if (snap) {
      const timer = setTimeout(() => setSnap(false), 300);
      return () => clearTimeout(timer);
    }
  }, [snap]);

  const sectionWidth = 170;
  const containerWidth = sectionWidth * sectionTitles.length;

  const perSectionMiddleOfBand = sectionWidth / 2;
  const bandOffset = `calc(${(containerWidth / 2 - perSectionMiddleOfBand) - activeSection * sectionWidth}px)`;

  const handleSectionClick = (idx: number) => {
    ignoreInputRef.current = true;
    setActiveSection(idx);
    setSnap(true);
    if (controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(
        (idx * (Math.PI * 2)) / sectionTitles.length
      );
    }
    accumulatedRef.current = 0;
    lastAngleRef.current = null;
    setTimeout(() => {
      ignoreInputRef.current = false;
    }, 300);
  };

  // Adapt text color for dark/light mode
  const activeColor = resolvedTheme === "dark" ? "#fff" : "#222";
  const inactiveColor = resolvedTheme === "dark" ? "#a2a2a2ff" : "#373737ff";
  const textShadow = resolvedTheme === "dark"
    ? "0 2px 8px rgba(0,0,0,0.32)"
    : "0 2px 8px rgba(0,0,0,0.12)";

  return (
    <div>
      {/* Band of sections above the ball */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: "14vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
          pointerEvents: "none",
          height: "40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: snap
              ? "transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)"
              : "transform 0.3s",
            transform: `translateX(${bandOffset})`,
          }}
        >
          {sectionTitles.map((title, idx) => (
            <span
              key={title}
              onClick={() => handleSectionClick(idx)}
              style={{
                fontSize: "2rem",
                fontWeight: idx === activeSection ? "bold" : "normal",
                color: idx === activeSection ? activeColor : inactiveColor,
                opacity: idx === activeSection ? 1 : 0.6,
                textShadow: idx === activeSection ? textShadow : "none",
                transition: "all 0.2s",
                width: `${sectionWidth}px`,
                textAlign: "center",
                pointerEvents: "auto", // allow clicking
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              {title}
            </span>
          ))}
        </div>
      </div>

      {/* Ball at the bottom */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "15vh",
          zIndex: 10,
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 7] }}
        >
          <ambientLight intensity={2} />
          <directionalLight position={[10, 5, 5]} intensity={1.5} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            target={[0, 0, 0]}
            enableDamping
            dampingFactor={0.1}
            //autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.3}
            onChange={handleControlsChange}
          />
          <Suspense
            fallback={
              <mesh position={new THREE.Vector3(0, 0, 0)} scale={0.4}>
                <sphereGeometry args={[8, 32, 32]} />
                <meshStandardMaterial wireframe roughness={0.7} metalness={0.2} color="#FFFF00" />
              </mesh>
            }
          >
            <TennisBallModel url="/tennis_ball/ball.glb" />
          </Suspense>
        </Canvas>
      </div>
    </div >
  );
}
