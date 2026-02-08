"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

function isGecko(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Gecko\/\d/.test(ua) && !/like Gecko/.test(ua);
}

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (isGecko() || isTouchDevice()) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: !isGecko(),
      duration: 0.7,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1,
      anchors: true,
    });

    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
