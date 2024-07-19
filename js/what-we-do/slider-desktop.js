// var swiper = new Swiper("#mySwiper__desktop", {
//   effect: "coverflow",
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: "1",
//   speed: 1000,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var mobileSwiper = new Swiper("#mySwiper__desktop", {
  loop: true,
  cssMode: true,
  slidesPerView: 3,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
