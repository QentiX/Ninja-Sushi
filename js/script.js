const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__burger')
const body = document.body

const sortBtn = document.querySelector('.choice');
const sortMenu = document.querySelector('.choice-wrap');


// бургер-меню
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

// слайдер
var swiper1 = new Swiper(".main-swiper", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});

// слайдер
var swiper2 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },

  breakpoints:{
    280: {
       slidesPerView: 1,
       spaceBetween: 0,
    },
    320: {
       slidesPerView: 1,
       spaceBetween: 0,
    },
    425: {
       slidesPerView: 2,
       spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  // navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  // },
});

// слайдер
var swiper3 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },

  breakpoints:{
    280: {
       slidesPerView: 1,
       spaceBetween: 0,
    },
    320: {
       slidesPerView: 1,
       spaceBetween: 0,
    },
    640: {
       slidesPerView: 1,
       spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// разворачивание меню сортировки
function myFunction() {
  document.getElementById("sort").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.choice')) {

    var dropdowns = document.getElementsByClassName("choice-wrap");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}