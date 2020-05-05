var width = $(window).width();

// при отключённом js - показывать меню
$('.header').removeClass('no-js');


// [index]
// если открыта главная
if ($(".main").hasClass("index")) {
  $('.header').addClass('index');
}

// мобильное меню
$(document).ready(function () {
  $('.header__menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.nav-section').toggleClass('active');
    $('.header__desktop-bottom').toggleClass('active');
    $("body").toggleClass('noscroll');

    $('.header__mobile-top').removeClass('search'); // тень над поиском у верхнего блока
    $('.header__search-link').removeClass('active');
    $('.search-container').removeClass('active');   // поиск
    $('.search-container').removeClass('out');      // смещение за нижним блоком
  });
});

// подменю на мобильном
$(document).ready(function () {
  if (width <= 756) {
    $('.main-nav-sub').click(function(evt) {
      evt.preventDefault();
      var currentSublist = $(this).closest('.main-nav__item').find('.main-nav__sub-list');
      $('.main-nav__sub-list').not(currentSublist).slideUp();
      currentSublist.slideToggle();
    });
  }
});

// появление нижнего блока меню
$(document).ready(function () {

  var headerBottomBlock = $('.header__mobile-bottom'),
      headerTopBlock = $('.header__mobile-top'),
      headerSearch = $('.search-container'),
      scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
      headerTopBlock.addClass('out');
      headerBottomBlock.addClass('out');
      headerSearch.addClass('out');
    } else {
      headerTopBlock.removeClass('out');
      headerBottomBlock.removeClass('out');
      headerSearch.removeClass('out');
    };
    scrollPrev = scrolled;
  })
});

// поиск
$(document).ready(function () {
  $('.header__search-link').click(function () {
    $(this).toggleClass('active');
    $('.search-container').toggleClass('active');
    $('.header__mobile-top').toggleClass('search');
  });
});

// убрать index при открытом меню
$(document).ready(function () {
  if($(".header").hasClass("index")) {
    $('.header__menu-toggle').click(function () {
      $('.header').toggleClass('index');
    });
  }
});

// слайдер центров
$(document).ready(function () {
  var centerSwiper = new Swiper('#center-swiper', {
    slidesPerView: '1.5',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    // loop: true,
    freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-button-next--center',
      prevEl: '.swiper-button-prev--center',
    },
    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 30,
        loop: false,
	      centeredSlides: false
      }
    }
  });

  // тень для слайдера если элементов <= 2
  var swiperContainerCenters = $('.rehab-swiper--centers .swiper-container'),
      swiperWrapperCenters = $('.rehab-swiper--centers .swiper-wrapper');

  if (width > 756) {
    if (swiperWrapperCenters.children().length <= 3) {
      swiperContainerCenters.addClass('two-slides');
      // console.log(swiperWrapperCenters.children().length);
    } else {
      swiperContainerCenters.removeClass('two-slides');
    }
  } else if (width <= 755) {
    if (swiperWrapperCenters.children().length <= 4) {
      // console.log(swiperWrapperCenters.children().length);
      centerSwiper.params.loop = false;
      // centerSwiper.params.slidesPerView = 1;
      // centerSwiper.params.centeredSlides = false;
      // centerSwiper.update();
    }
  }
});

// слайдер клиник
$(document).ready(function () {
  var clinicSwiper = new Swiper('#clinic-swiper', {
    slidesPerView: '1.5',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    // loop: true,
    freeMode: true,
    //autoplay: {
      //delay: 3000,
      //disableOnInteraction: false,
    //},
    navigation: {
      nextEl: '.swiper-button-next--clinic',
      prevEl: '.swiper-button-prev--clinic',
    },
    breakpoints: {
      756: {
        slidesPerView: '3',
        spaceBetween: 30,
        // loop: true
        // loop: false,
        centeredSlides: false
      }
    }
  });

  // тень для слайдера если элементов <= 2
  var swiperContainerClinics = $('.rehab-swiper--clinics .swiper-container'),
      swiperWrapperClinics = $('.rehab-swiper--clinics .swiper-wrapper');

  if (width > 756) {
    if (swiperWrapperClinics.children().length <= 2) {
      swiperContainerClinics.addClass('two-slides');
      // console.log(swiperWrapperCenters.children().length);
    } else {
      swiperContainerClinics.removeClass('two-slides');
    }
  } else if (width <= 755) {
    if (swiperWrapperClinics.children().length <= 3) {
      clinicSwiper.params.loop = false;
    }
  }

});

// маска для поля ввода номера
// maskedinput
$(document).ready(function () {
  $("#phone").mask("+7 (  999  ) 999  99  99");
  $(".phone-mask").mask("+7 (  999  ) 999  99  99");
});

// троеточие при избыточности символов на мобильном разрешении в rehab-swiper
// $(document).ready(function () {

//   var width = $(window).width(); // ширина экрана
//   var size = 43; // кол-во символов

//   if (width <= 755) {
//     $('.rehab-swiper__place-description').each(function () {
//       var rehabText = $(this).text();

//       if(rehabText.length > size){
//         $(this).text(rehabText.slice(0, size) + ' ...');
//       }
//     });
//   }
// });

// [database]
// если js подключён - меню скрыто
$('.database-search__list').removeClass('database-search__list--nojs');

// меню со статьями
$(document).ready(function () {
  $('.database-search__list-toggle').click(function () {
    $('.database-search__close-btn').toggleClass('active');
    $('.database-search__list-toggle').toggleClass('active');
    $('.database-search__list').toggleClass('active');
  });
});

// автофокус поиска
$(document).ready(function () {
  if ($("section").hasClass("database-search") && width > 755) {
    var windowHeight = $(window).height();
    var search = $('.database-search__input');
    var height = search.offset().top + search.height();

    $(document).on('scroll', function() {
    // если расстояние до поиска + его высота >= расстоянию,
    //  которое пользователь пролистал + высота окна
      if ($(document).scrollTop() + windowHeight >= height) {
        search.focus();
      }
    });
  }
});

// плавное перемещение на якорях и фоновое белое изображение
$(document).ready(function() {
  $(".database-search__list" ).on("click","a", function (event) {
    // event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);

    // if($(".database-search__link").hasClass("active")) {
    //   $('.database-search__link').not(this).removeClass('active');
    // }

    // $(this).toggleClass('active');
  });
});

// [reviews]
// слайдер отзывов
$(document).ready(function () {
  var mySwiper = new Swiper('#review-swiper', {
    slidesPerView: '1.3',
    speed: 3000,
    spaceBetween: 50,
    touchRatio: 1,
    // loop: true,
    freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.swiper-button-next--review',
      prevEl: '.swiper-button-prev--review',
    },
    breakpoints: {
      756: {
        slidesPerView: '3',
        spaceBetween: 0,
        // centeredSlides: true,
        slidesOffsetBefore: 14
      }
    }
  });
});

// показать весь отзыв
$(document).ready(function () {
  var reviewsArr = $('.reviews__blockquote-text');
  var size = 190; // кол-во символов

  // если это страница услуг (есть .double-main-wrapper)
  if ($('.reviews').parents().find($('.double-column-wrapper'))) {
  // if ($('.double-main-wrapper')) {  
    var size = 130;
  }

  // добавляем кнопку "показать ещё" для отзывов, длина которых > символов
  for (var i = 0; i < reviewsArr.length; i++) {
    if (reviewsArr[i].textContent.length > size) {
      console.log(reviewsArr[i].textContent.length);
      var currentRevieBlock = reviewsArr[i].closest('.reviews__text-block');
      currentRevieBlock.querySelector('.reviews__btn-more').classList.add('active');
    }
  } 

  // показываем отзыв
  $('.reviews__btn-more').on('click', function () {
    $(this).closest('.reviews__text-block').find('.reviews__blockquote-text').addClass('active');
    $(this).addClass('hidden');
  });
});

// [detox]
// если js подключён - меню скрыто
$('.services__list').removeClass('services__list--nojs');

// переключатель меню
$(document).ready(function () {
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

  $('.services__sub-item').click(function (evt) {
    evt.stopPropagation();
  });
});

// слайдер врачей (3 персоны на маленьком)
$(document).ready(function () {
  var galleryThumbsDoublePage = new Swiper('#little-master-swiper--double-wrapper-page', {
    // thumbs: {
    //   swiper: galleryThumbs
    // },
    slidesPerView: '3',
    touchRatio: 1,
    // loop: true,
    centeredSlides: true,
    spaceBetween: 40,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 48
    },
    // slidesOffsetBefore: '40',

    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      756: {
        direction: 'vertical',
        slidesPerView: '3',
        centeredSlides: false,
        spaceBetween: '35',
        slidesOffsetBefore: '0',
        loop: false
      }
    }
  });

  var mainMasterSwiper = new Swiper('#main-master-swiper--double-wrapper-page', {

    thumbs: {
      swiper: galleryThumbsDoublePage
    },
    slidesPerView: '1',
    // spaceBetween: 15,
    touchRatio: 1,
    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // loop: true,
    breakpoints: {
      756: {
        direction: 'vertical',
        spaceBetween: 30,
        loop: false
      }
    }
  });
});

// слайдер документов
$(document).ready(function () {
  var documentsSwiper = new Swiper('#little-document-swiper', {
      slidesPerView: '1',
      touchRatio: 1,
      // freeMode: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      //loop: true,
      navigation: {
        nextEl: '.swiper-button-next--document',
        prevEl: '.swiper-button-prev--document',
      }
  });
});

// вопрос-ответ
$(document).ready(function () {
  $(".faq__wrapper--q").on('click', function(){
    $(this).toggleClass('active');
    var data = $(this).data('id');
    $(this).find($('.faq__wrapper--a[data-id='+data+']').slideToggle());
  });
});

// калькулятор
$(document).ready(function () {
  $('.calc__link').attr('disabled', 'disabled'); // блокируем кнопку пока не выбран ни один пункт
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

        $(this).closest('.calc__filter-options').find('.calc__filter-handler').removeClass('active');
        $(this).closest('.calc__filter-options').find('.calc__filter-list').slideUp();

        $('.calc__link').removeAttr('disabled');
      }
    });
  });

  // расчёт стоимости
  $('.calc__link').on('click', function() {
    var width = $(window).width();

    var whomPrice,
        oldPrice,
        substPrice,
        regionPrice,
        timePrice;

    if (width > 755) {
      whomPrice = $('.calc-desktop .filter-whom').val();
      oldPrice = $('.calc-desktop .filter-old').val();
      substPrice = $('.calc-desktop .filter-subst').val();
      regionPrice = $('.calc-desktop .filter-region').val();
      timePrice = $('.calc-desktop .filter-time').val();
    } else if (width <= 755) {
      whomPrice = $('.hidden-mobile-block .filter-whom').val();
      oldPrice = $('.hidden-mobile-block .filter-old').val();
      substPrice = $('.hidden-mobile-block .filter-subst').val();
      regionPrice = $('.hidden-mobile-block .filter-region').val();
      timePrice = $('.hidden-mobile-block .filter-time').val();
    }

    // для сложения (старый вариант)
    // var priceArr = {
    //   '0' : 0,
    //   'Мне' : 3000,
    //   'Моему близкому' : 3000,
    //   'Несовершеннолетний' : 3000,
    //   '18-25' : 3500,
    //   '25-35' : 4000,
    //   '35-50' : 4500,
    //   '50+' : 5000,
    //   'Алкоголь' : 3000,
    //   'Наркотики' : 3000,
    //   'Москва' : 3000,
    //   'Московская область' : 2500,
    //   'Несколько дней' : 3000,
    //   'До года' : 3000,
    //   'От 1 до 3 лет' : 3000,
    //   'Более 3 лет' : 3000
    // }

    // var priceArrCurrent = [whomPrice, oldPrice, substPrice, regionPrice, timePrice];

    // var currentSum = 0;
    // for (var i = 0; i < priceArrCurrent.length; i++) {
      // currentSum += priceArr[priceArrCurrent[i]];
    // }

    // новый вариант start
    var currentSum = 3000;

    if (regionPrice === 'Московская область') {
      currentSum -= 500;
    }

    if (oldPrice === '18-25') {
      currentSum += 500;
    } else if (oldPrice === '25-35') {
      currentSum += 1000;
    } else if (oldPrice === '35-50') {
      currentSum += 1500;
    } else if (oldPrice === '50+') {
      currentSum += 2000;
    }
    // новый вариант end

    $('.final-price').text(currentSum);
  });
});

// меню с услугами
$(document).ready(function () {
  $('#btn-list-detox').click(function () {
    $('.btn-list__close-btn').toggleClass('active');
    $('.btn-list__list-toggle').toggleClass('active');
    $('.services__list').toggleClass('active');
  });
});

// [doctor-page]
// слайдер документов
$(document).ready(function () {
  var documentsSwiper = new Swiper('#document-swiper', {
    slidesPerView: '2',
    touchRatio: 1,
    centeredSlides: true,
    // freeMode: true,
    //autoplay: {
    //  delay: 3000,
    //  disableOnInteraction: false,
    //},
    //loop: true,
    navigation: {
      nextEl: '.swiper-button-next--document',
      prevEl: '.swiper-button-prev--document',
    },
    breakpoints: {

      756: {
        slidesPerView: '4',
        centeredSlides: false
        // spaceBetween: 30
        // loop: false
      }
    }
  });
});

// слайдер документов у рецензентов/врачей
$(document).ready(function () {
  var documentsSwiper = new Swiper('#review-document', {
    slidesPerView: '2',
    touchRatio: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next--document',
      prevEl: '.swiper-button-prev--document',
    },
    breakpoints: {
      756: {
        slidesPerView: '4',
        centeredSlides: false
      }
    }
  });
});

// слайдер врачей (4 персоны на маленьком)
$(document).ready(function () {
  var galleryThumbs = new Swiper('#little-master-swiper', {
    slidesPerView: '1',
    touchRatio: 1,
    // loop: true,
    centeredSlides: true,
    spaceBetween: 40,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 48
    },
    // slidesOffsetBefore: '40',

    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      756: {
        direction: 'vertical',
        slidesPerView: '4',
        centeredSlides: false,
        spaceBetween: '35',
        slidesOffsetBefore: '0',
        loop: false
      }
      // thumbs: {
      //   swiper: galleryThumbs,
      // }
    }
  });

  var mainMasterSwiper = new Swiper('#main-master-swiper', {

    thumbs: {
      swiper: galleryThumbs,
    },
    slidesPerView: '1',
    touchRatio: 1,
    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // loop: true,
    breakpoints: {
      756: {
        direction: 'vertical',
        spaceBetween: 30,
        loop: false
      }
    }
  });

  // galleryThumbs.controller.control = mainMasterSwiper;
  // mainMasterSwiper.controller.control = galleryThumbs;
});

// новый слайдер врачей
$(document).ready(function () {
  var personSwiper = new Swiper('#person-master-swiper', {
    slidesPerView: '1.5',
    centeredSlides: true,
    speed: 3000,
    spaceBetween: 25,
    touchRatio: 1,
    // loop: true,
    freeMode: true,
    breakpoints: {
      756: {
        slidesPerView: '4',
        spaceBetween: 30,
        loop: false,
        centeredSlides: false
      }
    }
  });
});

// [article-page]
// плавное перемещение на якорях в оглавлении
$(document).ready(function(){
  $(".article__sections-list" ).on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

// комментарии
$(document).ready(function(){
  // var commentForm = document.querySelector('.comments__form');
  // if (commentForm) {
  //   var commentInput = commentForm.querySelector('.comments__btn');
  //   var commentContainer = document.querySelector('.comments__content'); // секция, куда добавляем коммент

  //   // находим шаблон, определяем его контент (document-fragment)
  //   var commentTemplate = document.querySelector('#comment-template').content;
  //   // всё содержимое шаблона записываем в переменную
  //   var commentBlock = commentTemplate.querySelector('.comments__block');

  //   commentForm.addEventListener('submit', function (evt) {
  //     evt.preventDefault();

  //     // значение введённых данных
  //     var commentNameValue = commentForm.querySelector(".comments__form-name").value,
  //         commentTextValue = commentForm.querySelector(".comments__form-text").value;

  //     // актуальная дата
  //     var commentDate = new Date();
  //     var currentDay = commentDate.getDate(),
  //         currentMounth = commentDate.getMonth()+1,
  //         currentYear = commentDate.getFullYear();
  //         // currentHour = commentDate.getHours(),
  //         // currentMinute = commentDate.getMinutes();

  //         if (currentMounth < 10) {
  //           currentMounth = '0' + currentMounth;
  //         }

  //     // работа с шаблоном
  //     var commentTemplateDate = commentBlock.querySelector('.comments__datetime'),
  //         commentTemplateName = commentBlock.querySelector('.comments__name'),
  //         commentTemplateText = commentBlock.querySelector('.comments__text');

  //     // commentTemplateDate.textContent = currentDay + '.' + currentMounth + '.' + currentYear + ' ' + currentHour + ':' + currentMinute;
  //     commentTemplateDate.textContent = currentDay + '.' + currentMounth + '.' + currentYear;
  //     commentTemplateName.textContent = commentNameValue;
  //     commentTemplateText.textContent = commentTextValue;

  //     // клонируем весь шаблон и добавляем в секцию с комментариями
  //     var comment = commentBlock.cloneNode(true);
  //     commentContainer.appendChild(comment);

  //     //счётчик комментариев
  //     var commentCount = document.querySelector("#comments-count");
  //     commentCount.textContent++

  //     commentForm.reset();
  //   });
  // }

  // $('.comments__btn').on('click', function() {
  //   $('.comments__form').toggleClass('active');
  //   $('.comments__subtitle').text('Ваш комментарий отправлен');
  // })
});

// [clinics/centers]
// список городов
$(document).ready(function () {
  $('.contacts-map__filter-handler').on('click', function(){

    $(this).toggleClass('active');
    $data = $(this).data('id');
    $(this).find($('.contacts-map__filter-list[data-id='+$data+']').slideToggle());
    // $('.contacts-map__filter-options').toggleClass('active');

    $('.contacts-map__filter-item').click(function () {
      $value = $(this).text();
      $(this).addClass('active');

      $(this).closest('.contacts-map__filter-options').find('.contacts-map__filter-handler').text($value); // находим ближайшее поле ввода (ссылку)
                                                                                          //  и подставляем выбранное значение из списка

      $(this).closest('.contacts-map__filter-options').find('input').val($value);        // находим поле ввода и вставляем туда же текст
      if ($(this).closest('.contacts-map__filter-options').find('input').change()) {    // если поле было изменено - скрыть
        $(this).closest('.contacts-map__filter-options').find('.contacts-map__filter-handler').removeClass('active');
        $(this).closest('.contacts-map__filter-options').find('.contacts-map__filter-list').slideUp();
      }
    });
  });
});

// фильтр стоимости
$(document).ready(function () {
  $("#filter-range").slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 10000, 30000 ],
      slide: function( event, ui ) {
        $( "#range-toggle-min" ).val(ui.values[ 0 ] + " ₽");
        $( "#range-toggle-max" ).val(ui.values[ 1 ] + " ₽");
      }
    });
    $( "#range-toggle-min" ).val($( "#filter-range" ).slider( "values", 0 ) + " ₽");
    $( "#range-toggle-max" ).val($( "#filter-range" ).slider( "values", 1 ) + " ₽");


    $( "#range-toggle-min" ).mousemove(function()  {
      console.log($( "#filter-range" ).slider( "values", 0));
    });
});

// слайдер центров в 2 ряда
// $(document).ready(function () {
//   var mySwiper = new Swiper('#center-swiper-row-first', {
//     slidesPerView: '1.5',
//     centeredSlides: true,
//     speed: 3000,
//     spaceBetween: 25,
//     touchRatio: 1,
//     // loop: true,
//     freeMode: true,
//     // autoplay: {
//     //   delay: 3000,
//     //   disableOnInteraction: false,
//     // },
//     navigation: {
//       nextEl: '.swiper-button-next--center',
//       prevEl: '.swiper-button-prev--center',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       }
//     },
//     breakpoints: {
//       756: {
//         slidesPerView: '4',
//         spaceBetween: 30,
//         centeredSlides: false,
//         loop: false
//       }
//     }
//   });

//   var mySwiper = new Swiper('#center-swiper-row-second', {
//     slidesPerView: '1.5',
//     centeredSlides: true,
//     speed: 3000,
//     spaceBetween: 25,
//     touchRatio: 1,
//     // loop: true,
//     freeMode: true,
//     // autoplay: {
//     //   delay: 3000,
//     //   disableOnInteraction: false,
//     // },
//     navigation: {
//       nextEl: '.swiper-button-next--center',
//       prevEl: '.swiper-button-prev--center',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       }
//     },
//     breakpoints: {
//       756: {
//         slidesPerView: '4',
//         spaceBetween: 30,
//         centeredSlides: false,
//         loop: false
//       }
//     }
//   });
// });

// [clinic-page]
// слайдер документов
$(document).ready(function () {
  var documentsSwiper = new Swiper('#gallery-swiper', {
    slidesPerView: '2',
    touchRatio: 1,
    centeredSlides: true,
    spaceBetween: 30,
    // freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next--gallery',
      prevEl: '.swiper-button-prev--gallery',
    },
    breakpoints: {

      756: {
        slidesPerView: '4',
        centeredSlides: false,
        spaceBetween: 0
        // loop: false
      }
    }
  });
});

// открытие изображения в отдельном окне
// $(document).ready(function () {
//   $('.gallery-swiper__img').click(function(evt) {
//     var imagePath = $(this).attr('src');
//     $('body').append('<div class="huge-img"><img src="'+imagePath+'"></div>');
//     $('.overlay, .huge-img').fadeIn('active');
//   });
  
//   $('body').on('click', '.overlay', function(evt) {
//     $('.overlay, .huge-img').fadeOut('active', function() {
//       $('.huge-img').remove();
//     });
//   });
// });

// изображение в отдельном окне

// $().fancybox({
//     // selector : '.gallery-swiper__img',
//     loop: true,
//     animationEffect: "zoom-in-out",
//     buttons : [
//         'fullScreen',
//         'close'
//     ]
// });

// $(document).ready(function () {
//   $('.gallery-swiper__img').click(function(evt) {
//     imgOpen(this);
//   });
// });

// функция на открытие изображения в отдельном окне
// function imgOpen(imgClass) {
//   var imagePath = $(imgClass).attr('src');
//   $('body').append('<div class="huge-img"><img src="'+imagePath+'"></div>');
//   $('.overlay, .huge-img').fadeIn('active');

//   // клик вне фото
//   $('body').on('click', '.overlay', function(evt) {
//     $('.overlay, .huge-img').fadeOut('active', function() {
//       $('.huge-img').remove();
//     });
//   });

//   // либо нажат esc
//   $(document).keydown(function(evt){
//     if (evt.which === 27) {
//       $('.overlay, .huge-img').fadeOut('active', function() {
//         $('.huge-img').remove();
//       });
//     };
//   });

//   // клик на мобильном устройстве
//   $(document).on('touchstart', function (evt) {
//     var imgBlock = $(".huge-img");
//     if (!imgBlock.is(evt.target) && imgBlock.has(evt.target).length === 0) {
//       $('.overlay, .huge-img').fadeOut('active', function() {
//         $('.huge-img').remove();
//       });
//     }
//   });
// };

// модальные окна
$(document).ready(function () {

  // поиск
  $('.nav-info__item--search').click(function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn('active');
    $('.modal--search').toggleClass('active');
    $('.modal__input').focus();
  });

  // оставить заявку
  $('.modal-callback').click(function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn('active');
    $('.modal--callback').toggleClass('active');
    $('.modal__input-phone').focus();
  });

  // оставить отзыв
  $('.modal-review').click(function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn('active');
    $('.modal--review').toggleClass('active');
    $('.modal__input').focus();
  });

  // изменить город
  $('.modal-region').click(function (evt) {
    evt.preventDefault();
    $('.overlay').fadeIn('active');
    $('.modal--region').toggleClass('active');
    $('.modal__input').focus();
  });

  // изменить регион
  $('.contacts-map__container').click(function (evt) {
    if (evt.target.matches('.modal-region-here')) {
      evt.preventDefault();
      $('.overlay').fadeIn('active');
      $('.modal--region-here').toggleClass('active');
      $('.modal__input').focus();
    };
  });

  // $('.modal-region-here').click(function (evt) {
  //   evt.preventDefault();
  //   $('.overlay').fadeIn('active');
  //   $('.modal--region-here').toggleClass('active');
  // });

  function closeModal() {
    if ($(".modal").hasClass("active")) {
      $('.modal').removeClass('active');
      $('.overlay').fadeOut('active');
    }
  }

  // btn-close
  $('.modal__close').click(function () {
    closeModal();
    // $('.modal').removeClass('active');
    // $('.overlay').fadeOut('active');
  });

  // нажат esc
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      // if ($(".modal").hasClass("active")) {
      //   $('.modal').removeClass('active');
      //   $('.overlay').fadeOut('active');
      // }
      closeModal();
    }
  });

  // клик вне модального окна
  // $(document).mouseup(function (evt) {
  //   var modal = $(".modal");
  //   if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
  //     $('.modal').removeClass('active');
  //     $('.overlay').fadeOut('active');
  //   }
  // });

  $(document).on('mouseup touchstart', function (evt) {
    var modal = $(".modal");
    if (!modal.is(evt.target) && modal.has(evt.target).length === 0) {
      closeModal();
    }
  });
});

$(function () {
  $.fn.scrollToTop = function () {
    // изначально скрыть
    // $(this).hide();

    // если прокрутили - показать
    if ($(window).scrollTop() != '0') {
      $(this).fadeIn('slow');
    }

    var btnScrollTop = $(this);
    $(window).scroll(function () {
      // если прокртука < 440 - скрыть, >= - показать
      if ($(window).scrollTop() < '440') {
        // $(btnScrollTop).fadeOut('slow');
        $(btnScrollTop).removeClass('active');
      } else if ($(window).scrollTop() >= '440') {
        // $(btnScrollTop).fadeIn('slow');
        $(btnScrollTop).addClass('active');
      }
    });

    $(this).click(function () {
      $('html, body').animate({scrollTop: 0}, 1500);
    })
  }
});

$(function () {
  $('.go-top-btn').scrollToTop();
});

/*переключение табов*/
$(document).ready(function(){
  $('.search__toggle-btn').click(function(e) {
    e.preventDefault();
    $('.search__toggle-btn.active').removeClass('active');

    $(this).addClass('active');
    var tab = $(this).attr('href');

    $('.search__content-list').not(tab).removeClass('active');
    $(tab).addClass('active');
  });
});