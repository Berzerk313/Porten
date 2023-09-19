document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    },
    autoplay: {
      delay: 1000,
    },
  });
});
console.log(333);

/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  */