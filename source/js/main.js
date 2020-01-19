// [index-page]
// если открыта главная
if($(".main").hasClass("index")) {
  $('.header').addClass('index');
}

// если js подключён - меню скрыто
$('.header__desktop-bottom').removeClass('header__mob-menu--nojs');

// мобильное меню
$('.header__menu-toggle').click(function () {
  $(this).toggleClass('active');
  $('.nav-section').toggleClass('active');
  $('.header__desktop-bottom').toggleClass('active');
});

// убрать index при открытом меню
if($(".header").hasClass("index")) {
  $('.header__menu-toggle').click(function () {
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
      752: {
        slidesPerView: '3',
        spaceBetween: 42,
        loop: true,
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
      752: {
        slidesPerView: '3',
        spaceBetween: 30,
        loop: true
      }
    }
  });
});

// маска для поля ввода номера
// maskedinput
$(document).ready(function () {
  $("#phone").mask("+7 (  999  ) 999  99  99");
});

// inputmask
// $(document).ready(function(){
//   $("#phone").inputmask({"mask": "+7 (  999  ) 999  99  99"});
// });


// троеточие при избыточности символов на мобильном разрешении в rehab-swiper
// $(document).ready(function () {

//   var width = $(window).width(); // ширина экрана
//   var size = 43; // кол-во символов

//   if (width <= 752) {
//     $('.rehab-swiper__place-description').each(function () {
//       var rehabText = $(this).text();

//       if(rehabText.length > size){
//         $(this).text(rehabText.slice(0, size) + ' ...');
//       }
//     });
//   }
// });

// троеточие при избыточности символов на мобильном разрешении в database-preview
$(document).ready(function () {

  var width = $(window).width();
  var size = 64; // кол-во символов

  if (width <= 752) {
    $('.intro--database-preview--sub .intro__description').each(function () {
      var databaseText = $(this).text();

      if(databaseText.length > size){
        $(this).text(databaseText.slice(0, size) + ' ...');
      }
    });
  }
});

// [database-page]
// если js подключён - меню скрыто
$('.database-search__list').removeClass('database-search__list--nojs');

// меню со статьями
$('.database-search__list-toggle').click(function () {
  $('.database-search__close-btn').toggleClass('active');
  $('.database-search__list-toggle').toggleClass('active');
  $('.database-search__list').toggleClass('active');
});

// троеточие при избыточности символов на мобильном разрешении в article-block
$(document).ready(function () {

  var width = $(window).width(); // ширина экрана
  var size = 189; // кол-во символов

  if (width <= 752) {
    $('.articles-block .intro__description').each(function () {
      var rehabText = $(this).text();

      if(rehabText.length > size){
        $(this).text(rehabText.slice(0, size) + ' ...');
      }
    });
  }
});

// [reviews-page]
// слайдер отзывов
$(document).ready(function () {
  var mySwiper = new Swiper('#review-swiper', {
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
      nextEl: '.swiper-button-next--review',
      prevEl: '.swiper-button-prev--review',
    },
    breakpoints: {
      752: {
        slidesPerView: '3',
        // spaceBetween: 20,
        spaceBetween: 0,
        slidesOffsetBefore: 14,
        loop: true
      }
    }
  });
});

// [detox-page]
$('.services__item').click(function (evt) {
  evt.preventDefault();
  $(this).toggleClass('active');
});
