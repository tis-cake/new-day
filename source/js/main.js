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
// $(document).ready(function () {

//   var width = $(window).width();
//   var size = 64; // кол-во символов

//   if (width <= 752) {
//     $('.intro--database-preview--sub .intro__description').each(function () {
//       var databaseText = $(this).text();

//       if(databaseText.length > size){
//         $(this).text(databaseText.slice(0, size) + ' ...');
//       }
//     });
//   }
// });

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
    slidesPerView: '1.3',
    speed: 3000,
    spaceBetween: 50,
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
        centeredSlides: true,
        slidesOffsetBefore: 14,
        loop: true
      }
    }
  });
});

// [detox-page]
// переключатель меню
$('.services__item').click(function (evt) {
  evt.preventDefault();

  // $('.services__list').toggleClass('active');

  if($(".services__item").hasClass("active")) {                // по дефолту:
    $('.services__item').not(this).removeClass('active');      //   удалить у всех li класс acitve (кроме данного, т.к. у него впереди самое интересное)
    $('.services__sub-menu').removeClass('active');            //   закрыть все другие подменю
  }

  $(this).toggleClass('active');

  if($(this).hasClass("active")) {
    var data = $(this).data('id');
    $(this).find($('.services__sub-menu[data-id='+data+']').toggleClass('active'));
  }
});

// слайдер врачей
$(document).ready(function () {
  var galleryThumbs = new Swiper('#little-master-swiper', {
    direction: 'vertical',
    slidesPerView: '3',
    touchRatio: 1,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 48
    }

    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next--center',
    //   prevEl: '.swiper-button-prev--center',
    // },
    // breakpoints: {
    //   752: {
    //     slidesPerView: '3',
    //     spaceBetween: 42,
    //     loop: true,
    //   }
    // }
  });

  var mainMasterSwiper = new Swiper('#main-master-swiper', {

    thumbs: {
        swiper: galleryThumbs,
      },

    direction: 'vertical',
    slidesPerView: '1',
    spaceBetween: 15,
    touchRatio: 1,
    freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next--center',
    //   prevEl: '.swiper-button-prev--center',
    // },
    // breakpoints: {
    //   752: {
    //     slidesPerView: '3',
    //     spaceBetween: 42,
    //     loop: true,
    //   }
    // }
  });
});

// слайдер документов
$(document).ready(function () {
  var documentsSwiper = new Swiper('#little-documents-swiper', {
      slidesPerView: '1',
      // centeredSlides: true,
      touchRatio: 1,
      // spaceBetween: 12,
      // freeMode: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next--documents',
        prevEl: '.swiper-button-prev--documents',
      }
      // breakpoints: {
      //   752: {
      //     slidesPerView: '3',
      //     spaceBetween: 42,
      //     loop: true,
      //   }
      // }
  });
});

// вопрос-ответ
// $(document).ready(function () {
  $(".faq__wrapper--q").on('click', function(){
    $(this).toggleClass('active');
    var data = $(this).data('id');
    $(this).find($('.faq__wrapper--a[data-id='+data+']').slideToggle());
  });
// });

// калькулятор
$(document).ready(function () {
  // взаимодействие с меню
  $('.calc__filter-handler').on('click', function(){

    // if($('.calc__filter-list').hasClass('changed')) { // если значение уже было изменено - удалить класс
    //   $('.calc__filter-list').removeClass('changed');
    // }

    $(this).toggleClass('active');
    $data = $(this).data('id');
    $(this).find($('.calc__filter-list[data-id='+$data+']').slideToggle()); // открываем список с выбором

    $('.calc__filter-item').click(function () {      // при выборе элемента из списка
      $value = $(this).text();                    // копируем текст элемента
      $(this).addClass('active');

      $(this).closest('.calc__filter-options').find('.calc__filter-handler').text($value); // находим ближайшее поле ввода (ссылку)
                                                                                          //  и подставляем выбранное значение из списка

      // value = $(this).data('id');   // раскомменитровать если в input нужно вставлять не текст,
                                       //   а значение data-id (сейчас = 0)
                                       //   [сейчас input скрыт: удалить класс visually-hidden (html), и left (css)]

      $(this).closest('.calc__filter-options').find('input').val($value);        // находим поле ввода и вставляем туда же текст
      if ($(this).closest('.calc__filter-options').find('input').change()) {    // если поле было изменено - скрыть
        // $(this).closest('.calc__filter-options').find('.calc__filter-list').addClass('changed');
        // if ($('.calc__filter-list').hasClass('changed')) {
          // $(this).removeClass('.active');

          $(this).closest('.calc__filter-options').find('.calc__filter-handler').removeClass('active');
          $(this).closest('.calc__filter-options').find('.calc__filter-list').slideUp();
        // }
      }
    });
  });

  // расчёт стоимости
  $('.calc__link').on('click', function() {

    var priceArr = {
      '0' : 0,
      'Мне' : 1000,
      'Моему близкому' : 1500,
      'Несовершеннолетний' : 1200,
      '18-25' : 150,
      '25-35' : 200,
      '35-50' : 30,
      '50+' : 35,
      'Алкоголь' : 200,
      'Наркотики' : 400,
      'Москва' : 3000,
      'Замкадье' : 2000,
      'Несколько дней' : 300,
      'До года' : 1000,
      'От 1 до 3 лет' : 4000,
      'Более 3 лет' : 10000
    }

    var whomPrice = $('#filter-whom').val();
    var oldPrice = $('#filter-old').val();
    var substPrice = $('#filter-subst').val();
    var regionPrice = $('#filter-region').val();
    var timePrice = $('#filter-time').val();

    var priceArrCurrent = [whomPrice, oldPrice, substPrice, regionPrice, timePrice];

    var currentSum = 0;
    for (var i = 0; i < priceArrCurrent.length; i++) {
      currentSum += priceArr[priceArrCurrent[i]];
    }

    $('span#final-price').text(currentSum);
  });
});
