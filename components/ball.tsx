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
  touchAngle,
}: {
  activeSection: number;
  setActiveSection: (idx: number) => void;
  sectionTitles: string[];
  touchAngle?: number | null;
}) {
  const controlsRef = useRef<ThreeOrbitControls>(null);
  const lastAngleRef = useRef<number | null>(null);
  const accumulatedRef = useRef<number>(0);
  const ignoreInputRef = useRef<boolean>(false);
  const [snap, setSnap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animatingLetters, setAnimatingLetters] = useState(0);
  const prevSectionRef = useRef<number>(activeSection);
  const { resolvedTheme } = useTheme();
  const baseAngleRef = useRef<number>(0);

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

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Trigger letter animation on section change (mobile only)
  useEffect(() => {
    if (!isMobile || activeSection === prevSectionRef.current) return;

    const maxLetters = Math.max(
      sectionTitles[activeSection].length,
      sectionTitles[prevSectionRef.current].length
    );

    setAnimatingLetters(0);

    // Animate each letter one by one
    let letterIndex = 0;
    const interval = setInterval(() => {
      letterIndex++;
      setAnimatingLetters(letterIndex);

      if (letterIndex >= maxLetters) {
        clearInterval(interval);
        prevSectionRef.current = activeSection;
      }
    }, 100); // 40ms between each letter

    return () => clearInterval(interval);
  }, [activeSection, isMobile, sectionTitles]);

  // Handle touch drag angle changes from swipe navigation
  useEffect(() => {
    if (touchAngle === null) {
      // Touch ended - check if we need to change section based on accumulated angle
      if (!ignoreInputRef.current) {
        if (accumulatedRef.current >= Math.PI / 1.5) {
          if (controlsRef.current) {
            controlsRef.current.enabled = false;
            setTimeout(() => {
              if (controlsRef.current) controlsRef.current.enabled = true;
            }, 50);
          }
          setActiveSection((activeSection + 1) % sectionTitles.length);
          setSnap(true);
        } else if (accumulatedRef.current <= -Math.PI / 1.5) {
          if (controlsRef.current) {
            controlsRef.current.enabled = false;
            setTimeout(() => {
              if (controlsRef.current) controlsRef.current.enabled = true;
            }, 50);
          }
          setActiveSection((activeSection - 1 + sectionTitles.length) % sectionTitles.length);
          setSnap(true);
        }
      }
      accumulatedRef.current = 0;
      baseAngleRef.current = 0;
      lastAngleRef.current = null;
      return;
    }

    // Touch is active - apply the angle to the ball
    if (controlsRef.current && !ignoreInputRef.current) {
      if (baseAngleRef.current === 0 && lastAngleRef.current === null) {
        // First touch - store current angle as base
        baseAngleRef.current = controlsRef.current.getAzimuthalAngle();
        lastAngleRef.current = baseAngleRef.current;
      }
      
      // Apply the touch angle delta to the base angle
      const newAngle = baseAngleRef.current + touchAngle;
      
      // Calculate delta for accumulation (same logic as handleControlsChange)
      if (lastAngleRef.current !== null) {
        let delta = newAngle - lastAngleRef.current;
        if (delta > Math.PI) delta -= 2 * Math.PI;
        if (delta < -Math.PI) delta += 2 * Math.PI;
        accumulatedRef.current += delta;
      }
      
      lastAngleRef.current = newAngle;
      controlsRef.current.setAzimuthalAngle(newAngle);
    }
  }, [touchAngle, activeSection, sectionTitles]);

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

  // Render animated section title with letter transitions
  const renderAnimatedTitle = () => {
    const currentTitle = sectionTitles[activeSection];
    const previousTitle = sectionTitles[prevSectionRef.current];
    const maxLength = Math.max(currentTitle.length, previousTitle.length);

    const letters = [];
    for (let i = 0; i < maxLength; i++) {
      const showNew = i < animatingLetters;
      const char = showNew ? currentTitle[i] : previousTitle[i];
      const isTransitioning = i === animatingLetters - 1;

      letters.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: char ? 1 : 0,
            transform: isTransitioning ? "scale(0.8)" : "scale(1)",
            transition: isTransitioning
              ? "transform 0.1s ease-out, opacity 0.1s ease-out"
              : "none",
          }}
        >
          {char || ""}
        </span>
      );
    }
    return letters;
  };

  return (
    <div>
      {isMobile ? (
        // Mobile: Arrow navigation with current section name
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
            pointerEvents: "auto",
            height: "40px",
            gap: "20px",
          }}
        >
          {/* Left arrow */}
          <button
            onClick={() => handleSectionClick((activeSection - 1 + sectionTitles.length) % sectionTitles.length)}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              color: activeColor,
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            ←
          </button>

          {/* Current section name in middle */}
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: activeColor,
              textShadow: textShadow,
              userSelect: "none",
              whiteSpace: "nowrap",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            {renderAnimatedTitle()}
          </span>

          {/* Right arrow */}
          <button
            onClick={() => handleSectionClick((activeSection + 1) % sectionTitles.length)}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              color: activeColor,
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            →
          </button>
        </div>
      ) : (
        // Desktop/Tablet: Original band with all section names
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
                  pointerEvents: "auto",
                  userSelect: "none",
                  cursor: "pointer",
                }}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      )}

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
