import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animationDefaults, scrollTriggerDefaults, staggers, timings } from './gsapConfig';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Fade up animation on scroll
 */
export const fadeUpOnScroll = (element, options = {}) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || animationDefaults.duration,
      ease: options.ease || animationDefaults.ease,
      scrollTrigger: {
        trigger: element,
        start: scrollTriggerDefaults.start,
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * Staggered fade up animation on scroll
 */
export const staggerFadeUpOnScroll = (elements, options = {}) => {
  if (!elements || elements.length === 0) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || animationDefaults.duration,
      ease: options.ease || animationDefaults.ease,
      stagger: options.stagger || staggers.normal,
      scrollTrigger: {
        trigger: elements[0]?.parentElement || elements[0],
        start: scrollTriggerDefaults.start,
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * Zoom in on scroll
 */
export const zoomInOnScroll = (element, options = {}) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: options.duration || animationDefaults.duration,
      ease: options.ease || animationDefaults.ease,
      scrollTrigger: {
        trigger: element,
        start: scrollTriggerDefaults.start,
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * Parallax effect on scroll
 */
export const parallaxOnScroll = (element, options = {}) => {
  if (!element) return;

  gsap.to(element, {
    y: options.distance || 50,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      scrub: options.scrub || 1,
      ...options.scrollTrigger,
    },
  });
};

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Setup card hover effect
 */
export const setupCardHover = (element, options = {}) => {
  if (!element) return;

  const hoverState = {
    y: options.yOffset || -8,
    boxShadow: options.shadow || '0 12px 32px rgba(0,0,0,0.15)',
    duration: options.duration || timings.normal,
    ease: options.ease || 'power2.out',
  };

  const normalState = {
    y: 0,
    boxShadow: options.normalShadow || '0 1px 3px rgba(0,0,0,0.05)',
    duration: options.duration || timings.normal,
    ease: options.ease || 'power2.out',
  };

  element.addEventListener('mouseenter', () => {
    gsap.to(element, hoverState);
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, normalState);
  });
};

/**
 * Setup icon hover effect
 */
export const setupIconHover = (element, options = {}) => {
  if (!element) return;

  const hoverState = {
    x: options.xOffset || 4,
    scale: options.scale || 1.1,
    color: options.color || '#1F6FFF',
    duration: timings.normal,
    ease: 'power2.out',
  };

  const normalState = {
    x: 0,
    scale: 1,
    color: options.normalColor || '#CBD5E1',
    duration: timings.normal,
    ease: 'power2.out',
  };

  element.addEventListener('mouseenter', () => {
    gsap.to(element, hoverState);
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, normalState);
  });
};

// ============================================
// TIMELINE ANIMATIONS
// ============================================

/**
 * Create a staggered sequence animation
 */
export const createStaggerTimeline = (elements, options = {}) => {
  if (!elements || elements.length === 0) return null;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: elements[0]?.parentElement || elements[0],
      start: scrollTriggerDefaults.start,
      ...options.scrollTrigger,
    },
  });

  elements.forEach((element, index) => {
    timeline.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || animationDefaults.duration,
        ease: options.ease || animationDefaults.ease,
      },
      index * (options.stagger || staggers.normal)
    );
  });

  return timeline;
};

/**
 * Create a complex hero timeline
 */
export const createHeroTimeline = (heroRef, options = {}) => {
  if (!heroRef) return null;

  const timeline = gsap.timeline();

  const heading = heroRef.querySelector('[data-gsap="heading"]') || heroRef.querySelector('h1');
  const subheading = heroRef.querySelector('[data-gsap="subheading"]') || heroRef.querySelector('p');
  const ctaButtons = heroRef.querySelectorAll('[data-gsap="cta"]');

  if (heading) {
    timeline.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: timings.scroll,
        ease: 'power3.out',
      }
    );
  }

  if (subheading) {
    timeline.fromTo(
      subheading,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: timings.scroll,
        ease: 'power3.out',
      },
      '-=0.4'
    );
  }

  if (ctaButtons.length > 0) {
    timeline.fromTo(
      ctaButtons,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: timings.scroll,
        stagger: staggers.normal,
        ease: 'power3.out',
      },
      '-=0.4'
    );
  }

  return timeline;
};

// ============================================
// ADVANCED EFFECTS
// ============================================

/**
 * Text reveal animation
 */
export const revealTextOnScroll = (element, options = {}) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: options.duration || timings.slow,
      scrollTrigger: {
        trigger: element,
        start: scrollTriggerDefaults.start,
        scrub: options.scrub || false,
        ...options.scrollTrigger,
      },
    }
  );
};

/**
 * Progress bar animation
 */
export const animateProgressBar = (element, targetValue, options = {}) => {
  if (!element) return;

  gsap.to(element, {
    '--progress': targetValue,
    width: `${targetValue}%`,
    duration: options.duration || timings.scroll,
    ease: options.ease || 'power2.out',
    scrollTrigger: {
      trigger: element.parentElement,
      start: scrollTriggerDefaults.start,
      scrub: options.scrub || 1,
      ...options.scrollTrigger,
    },
  });
};

/**
 * Kill all scroll triggers (useful for cleanup)
 */
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  ScrollTrigger.refresh();
};

/**
 * Refresh scroll triggers (useful after content changes)
 */
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

export default gsap;
