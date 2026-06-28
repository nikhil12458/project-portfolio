"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis(options = {}) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: true,
      autoRaf: false,

      ...options,
    });

    lenisRef.current = lenis;

    // Keep ScrollTrigger updated
    lenis.on("scroll", ScrollTrigger.update);

    // Let GSAP drive Lenis
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after layout changes
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return lenisRef;
}
