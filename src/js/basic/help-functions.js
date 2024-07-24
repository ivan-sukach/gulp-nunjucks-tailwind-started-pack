import gsap from 'gsap/all'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CustomEase from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const basicDuration = 1

export function isThereClass(element) {
  return document.querySelectorAll(element).length > 0
}

export function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}

export function throttle(callback, wait, immediate = false) {
  let timeout = null
  let initialCall = true

  return (...args) => {
    const callNow = immediate && initialCall
    const next = () => {
      callback.apply(this, ...args)
      timeout = null
    }

    if (callNow) {
      initialCall = false
      next()
    }

    if (!timeout) {
      timeout = setTimeout(next, wait)
    }
  }
}

// Split lines
export function initSplitText(elements) {
  const textWrappers = document.querySelectorAll(elements)

  new SplitText(elements, { type: 'lines', linesClass: 'fade-overflow' })

  textWrappers.forEach(textWrapper => {
    textWrapper
      .querySelectorAll('.fade-overflow')
      .forEach((line, index, array) => {
        const words = line.innerHTML

        line.innerText = ''
        line.innerHTML = `<div class="fade-el">${words}</div>`

        if (index === array.length - 1) {
          textWrapper.classList.add('split-complete')
        }
      })
  })
}

// Batch
export function batchOnScroll(wrappers) {
  document.querySelectorAll(wrappers).forEach(wrapper => {
    ScrollTrigger.batch(wrapper.querySelectorAll('[fade-trigger="batch"]'), {
      start: 'top bottom-=10%',
      end: 'bottom bottom-=10%',
      once: true,
      onEnter: batch => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 1,
          stagger: 0.15,
        })
      },
    })
  })
}

export function staggerChildren(wrappers) {
  document.querySelectorAll(wrappers).forEach(wrapper => {
    const delay = wrapper.getAttribute('stagger-children-delay');
    gsap.to(wrapper.querySelectorAll('[fade]'), {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      stagger: delay ? +delay : 0.15,

      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom-=10%',
        end: 'bottom bottom-=10%',
        once: true,
      },
    })


    ScrollTrigger.batch(wrapper.querySelectorAll('[fade-trigger="batch"]'), {
      start: 'top bottom-=10%',
      end: 'bottom bottom-=10%',
      once: true,
      markers: true,
      onEnter: batch => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut',
          duration: 1,
          stagger: 0.15,
        })
      },
    })
  })
}

gsap.registerEffect({
  name: 'split',
  effect: (targets, config) => {
    targets.forEach(target => {
      if (target.getAttribute('split-trigger') !== 'scroll') {
        return gsap.to(target.querySelectorAll('.fade-el'), {
          transform: 'none',
          stagger: config.stagger,
          duration: config.duration,
          ease: config.ease,
          delay: config.delay,
        })
      }

      return gsap.to(target.querySelectorAll('.fade-el'), {
        transform: 'none',
        stagger: config.stagger,
        duration: config.duration,
        ease: config.ease,
        scrollTrigger: {
          trigger: target,
          start: `top bottom-=${config.offset}%`,
          end: `bottom bottom-=${config.offset}%`,
          scrub: false,
          once: config.once,
          markers: config.markers,
        },
      })
    })
  },
  defaults: {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: basicDuration,
    ease: 'power2.inOut',
    once: true,
    offset: 10,
    markers: false,
  },
  extendTimeline: true,
})

gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    targets.forEach(target => {
      if (target.getAttribute('fade-trigger') !== 'scroll') {
        return gsap.to(target, {
          opacity: 1,
          transform: 'none',
          stagger: config.stagger,
          duration: config.duration,
          ease: config.ease,
        })
      }

      return gsap.to(target, {
        opacity: 1,
        transform: 'none',
        stagger: config.stagger,
        duration: config.duration,
        ease: config.ease,

        scrollTrigger: {
          trigger: target,
          start: `top bottom-=${config.offset}%`,
          end: `bottom bottom-=${config.offset}%`,
          once: config.once,
          markers: config.markers,
        },
      })
    })
  },
  defaults: {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1,
    ease: 'power2.inOut',
    once: true,
    offset: 10,
    markers: false,
  },
  extendTimeline: true,
})

gsap.registerEffect({
  name: 'zoomOut',
  effect: (targets, config) => {
    targets.forEach(target => {
      if (target.getAttribute('zoom-out-trigger') !== 'scroll') {
        return gsap.to(target, {
          opacity: 1,
          transform: 'none',
          stagger: config.stagger,
          duration: config.duration,
          ease: config.ease,
        })
      }

      return gsap.to(target, {
        opacity: 1,
        transform: 'none',
        stagger: config.stagger,
        duration: config.duration,
        ease: config.ease,

        scrollTrigger: {
          trigger: target,
          start: `top bottom-=${config.offset}%`,
          end: `bottom bottom-=${config.offset}%`,
          once: config.once,
          markers: config.markers,
        },
      })
    })
  },
  defaults: {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 1.5,
    ease: 'power2.inOut',
    once: true,
    offset: 25,
    markers: false,
  },
  extendTimeline: true,
})
