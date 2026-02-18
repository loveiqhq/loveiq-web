"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Signal that React has hydrated — tests (Playwright WebKit) wait for this
    // before interacting, since Safari's JS engine hydrates slower than V8.
    document.documentElement.dataset.hydrated = "true";

    if (isTouchDevice()) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
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
