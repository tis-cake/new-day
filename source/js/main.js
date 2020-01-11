if($(".main").hasClass("index")) {
  $('.header').addClass('index');
}

// мобильное меню

$('.menu-toggle').click(function () {
  $(this).toggleClass('active');
  $('.nav-section').toggleClass('active');
  $('.header__desktop-bottom').toggleClass('active');
  // $('.header__menu-logo').toggleClass('active');

});

// убрать index при открытом меню

if($(".header").hasClass("index")) {
  $('.menu-toggle').click(function () {
    $('.header').toggleClass('index');
  });
}

// слайдер центров

$(document).ready(function () {
  var mySwiper = new Swiper('#center-swiper', {
    slidesPerView: '1.5',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next--center',
      prevEl: '.swiper-button-prev--center',
    },
    breakpoints: {
      751: {
        slidesPerView: '3',
        spaceBetween: 42,
        loop: true
      }
    }
  });
});

// слайдер клиник

$(document).ready(function () {
  var mySwiper = new Swiper('#clinic-swiper', {
    slidesPerView: '1.5',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next--clinic',
      prevEl: '.swiper-button-prev--clinic',
    },
    breakpoints: {
      751: {
        slidesPerView: '3',
        spaceBetween: 30,
        loop: true
      }
    }
  });
});


