import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Smooth‑scroll hook using Lenis.
 * Returns the Lenis instance so callers can scroll programmatically.
 */
export default function useLenis(config = {}) {
  const lenisRef = useRef(null);     // holds the instance
  const rafIdRef = useRef(0);        // holds the RAF id for cleanup

  useEffect(() => {
    // ---- 1.  Initialise ----------------------------------------------
    lenisRef.current = new Lenis({
      lerp: 0.08,          // smoothing factor (0 = instant, 1 = no movement)
      wheelMultiplier: 1,  // adjust scroll speed
      ...config,           // allow overrides from caller
    });

    // ---- 2.  Kick‑off the RAF loop -----------------------------------
    const raf = (time) => {
      lenisRef.current?.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    // ---- 3.  Cleanup on unmount --------------------------------------
    return () => {
      lenisRef.current?.destroy();
      cancelAnimationFrame(rafIdRef.current);
    };
  }, []);  // run once

  // ---- 4.  Return the instance to the caller -------------------------
  return lenisRef.current;
}
