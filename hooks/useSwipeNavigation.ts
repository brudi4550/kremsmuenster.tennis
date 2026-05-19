import { useEffect, useRef } from "react";

export function useSwipeNavigation(
  onAngleChange: (angle: number | null) => void,
  enabled = true
) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const accumulatedAngleRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) return;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const x = e.touches[0].clientX;
      touchStartRef.current = { x, y: e.touches[0].clientY };
      accumulatedAngleRef.current = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length !== 1) return;

      const currentX = e.touches[0].clientX;
      const deltaX = currentX - touchStartRef.current.x;
      
      // Convert horizontal movement to angle (similar to mouse drag on OrbitControls)
      // Viewport width / 2π radians = how much pixels per radian
      const angle = -(deltaX / window.innerWidth) * Math.PI * 2;
      
      accumulatedAngleRef.current = angle;
      onAngleChange(angle);
    };

    const handleTouchEnd = () => {
      accumulatedAngleRef.current = 0;
      onAngleChange(null as any);
      touchStartRef.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onAngleChange, enabled]);
}
