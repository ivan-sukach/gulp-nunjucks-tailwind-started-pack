import gsap from 'gsap'

export default function () {
  const html = document.querySelector('html')
  const hamburgers = document.querySelectorAll('.header-hamburger')

  const menuTL = gsap
    .timeline({
      paused: true,
      defaults: { duration: 0.8, ease: 'customEase' },
    })
    .call(() => {
      html.classList.toggle('overflow-hidden')
      html.classList.toggle('menu-open')
    })
    .fromTo(
      '.menu',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }
    )

    .fromTo(
      '.menu-img',
      {
        scale: 1.4,
      },
      {
        scale: 1,
      },
      '<'
    )

    .fromTo(
      '.menu-content [fade]',
      {
        y: gsap.getProperty('[fade]', 'y', 'px'),
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      '<'
    )


  hamburgers.forEach(hamburger => {
    hamburger.addEventListener('click', toggleMenu)
  })
  function toggleMenu() {
    if (menuTL.paused() || menuTL.reversed()) {
      menuTL.timeScale(1)
      menuTL.resume()
    } else {
      menuTL.timeScale(1.3)
      menuTL.reversed(!menuTL.reversed())
    }
  }
}
