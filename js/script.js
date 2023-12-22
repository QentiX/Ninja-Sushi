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
  pagination: {
    el: ".swiper-pagination",
  },
});
