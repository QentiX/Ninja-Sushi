const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__burger')
const body = document.body

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.querySelectorAll('.menu__link').forEach(link =>{
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}

const swiper = new Swiper(".swiper", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
  // grabCursor: true,
  //     speed: 600,
  //     effect: "creative",
  //     creativeEffect: {
  //       prev: {
  //         shadow: true,
  //         translate: [0, 0, -400],
  //       },
  //       next: {
  //         translate: ["100%", 0, 0],
  //       },
  // },
});
