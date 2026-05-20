'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPInit() {
    useEffect(() => {
        // Initialize GSAP configuration
        gsap.config({ trialWarn: false });

        // Optional: You can add any global GSAP event listeners here if needed
        // For example, listening to scroll events or window resize

        return () => {
            // Optional cleanup
        };
    }, []);

    return null;
}
