var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween:  120,
    },
  },
});

var swiper = new Swiper(".mySwiperOfertas", {
  slidesPerView: 1,
  spaceBetween: 10,
navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

