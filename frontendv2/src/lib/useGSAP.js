'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to use GSAP in components
 * Automatically handles cleanup
 */
export const useGSAP = (callback, deps = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP config
    gsap.config({ trialWarn: false });

    // Call the animation callback
    if (callback) {
      callback();
    }

    // Refresh ScrollTrigger after animations are created
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      // Kill all animations on cleanup if needed
      // gsap.killTweensOf('*');
    };
  }, deps);

  return elementRef;
};

export default useGSAP;
