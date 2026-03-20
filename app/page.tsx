"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useState, useEffect } from "react";
import Seit1977 from "@/components/seit1977";
import { useTheme } from "next-themes";
import Clubhaus from "@/components/clubhaus";
import Sponsors from "@/components/sponsors";
import Socials from "@/components/socials";
import NextGen from "@/components/next-gen";
import WFragen from "@/components/w-fragen";
import PlatzUndDu from "@/components/platz-und-du";
import TennisBallNav from "@/components/ball";
import AnimationSpinner from "@/components/animation_spinner";
import SideWaves from "@/components/side-waves";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [activeSection, setActiveSection] = useState(3);
  const [showBallNav, setShowBallNav] = useState(true);
  const [inAnimationPhase, setInAnimationPhase] = useState(true);

  useEffect(() => setMounted(true), []);

  const sectionTitles = [
    "sponsoren.", "clubhaus.", "socials.",
    "seit 1977.", "nextGen.", "du+platz.", "w fragen."
  ];

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const ballBg = isDark ? "#18181b" : "#fff";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInAnimationPhase(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  useEffect(() => {
    let lastScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const onScroll = () => {
      const currentScrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop,
        0
      );

      if (currentScrollTop < lastScrollTop) {
        setShowBallNav(true);
      } else if (currentScrollTop > lastScrollTop) {
        setShowBallNav(false);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  if (showSpinner) {
    return (
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          background: ballBg,
          transition: "background 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={isDark ? "dark" : ""}
      >
        <AnimationSpinner />
      </div>
    );
  }

  const isBallNavVisible = showBallNav && !inAnimationPhase;

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: ballBg,
        transition: "background 0.3s",
      }}
      className={isDark ? "dark" : ""}
    >
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <SideWaves />

      {activeSection === 0 && <Sponsors />}
      {activeSection === 1 && <Clubhaus />}
      {activeSection === 2 && <Socials />}
      {activeSection === 3 && <Seit1977 animate={inAnimationPhase} />}
      {activeSection === 4 && <NextGen />}
      {activeSection === 5 && <PlatzUndDu />}
      {activeSection === 6 && <WFragen />}

      <div style={{ paddingBottom: "calc(20vh + 100px)", position: "relative", zIndex: 1 }} />

      {/* Glass blur effect with increasing blur */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "35vh",
          zIndex: 19,
          pointerEvents: "none",
          overflow: "hidden",
          transition: "transform 0.4s",
          transform: isBallNavVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        {/* Bottom stronger blur */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backdropFilter: `blur(${isBallNavVisible ? 8 : 0}px)`,
            WebkitBackdropFilter: `blur(${isBallNavVisible ? 8 : 0}px)`,
            mask: "linear-gradient(to top, black, black 55%, transparent 100%)",
            opacity: isBallNavVisible ? 1 : 0,
            background: isDark
              ? `rgba(24,24,27,${isBallNavVisible ? 0.65 : 0})`
              : `rgba(255,255,255,${isBallNavVisible ? 0.65 : 0})`,
            boxShadow: isDark
              ? `0 -2px 32px 0 rgba(0,0,0,${isBallNavVisible ? 0.12 : 0})`
              : `0 -2px 32px 0 rgba(0,0,0,${isBallNavVisible ? 0.04 : 0})`,
            transition:
              "backdrop-filter 0.4s, -webkit-backdrop-filter 0.4s, background 0.4s, box-shadow 0.4s, opacity 0.4s",
          }}
        />
      </div>

      {/* Ball nav */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          zIndex: 20,
          transition: "opacity 0.4s, transform 0.4s",
          opacity: isBallNavVisible ? 1 : 0,
          transform: isBallNavVisible ? "translateY(0)" : "translateY(40px)",
          pointerEvents: showBallNav ? "auto" : "none",
        }}
      >
        <TennisBallNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sectionTitles={sectionTitles}
        />
      </div>
    </div>
  );
}
