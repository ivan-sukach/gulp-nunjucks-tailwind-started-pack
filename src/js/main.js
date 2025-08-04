import Lenis from 'lenis';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import {
  isThereClass,
  initSplitText,
  isSafari,
  batchOnScroll,
  staggerChildren,
} from './basic/help-functions'



window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
  });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  // Split text lines
  initSplitText('[split-direction]');

  // Create Preloader function with calback that call next functions 
  // After preloader
  gsap.effects.split('[split-trigger="scroll"]')
  gsap.effects.split('[split-trigger="load"]')
  gsap.effects.fade('[fade-trigger="load"]')
  //  if (isThereClass('[stagger-children]')) staggerChildren('[stagger-children]')
  //  if (isThereClass('[zoom-out-trigger="scroll"]')) gsap.effects.zoomOut('[zoom-out-trigger="scroll"]')

  // if (isThereClass('.home-hero-section')) initHomeHeroAnimation();

})
