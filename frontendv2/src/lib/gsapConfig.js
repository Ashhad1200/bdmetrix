import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults
gsap.config({ trialWarn: false });

// Animation defaults
export const animationDefaults = {
  duration: 0.8,
  ease: 'power3.out',
};

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'top 20%',
  scrub: false,
  markers: false,
};

// Easing presets
export const easings = {
  smooth: 'power3.out',
  bouncy: 'elastic.out',
  snappy: 'back.out',
  linear: 'none',
};

// Animation timings
export const timings = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  scroll: 0.8,
};

// Stagger presets
export const staggers = {
  small: 0.05,
  normal: 0.1,
  large: 0.15,
};

export default gsap;
