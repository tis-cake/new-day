ymaps.ready(init);

// массив с метками
var placemarks = [

  // {
  //     latitude: ,         // ширина
  //     longitude: ,        // высота
  //     hintContent: '',    // хинт
  //     balloonContent: ''  // балун
  // },

  {
    latitude: 55.772709,
    longitude: 37.675886,
    hintContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1',
    balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
  },

  {
    latitude: 55.775892,
    longitude: 37.660511,
    hintContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1',
    balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
  },

  {
    latitude: 55.780666,
    longitude: 37.582138,
    hintContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1',
    balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
  },

  {
    latitude: 55.760829,
    longitude: 37.575786,
    hintContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1',
    balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
  }
];

// Адаптивный зум и иконка.
var width  = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var zoomValue;
// var iconSize = [];

if (width > 756) {
    zoomValue = 12;
    // iconSize = [30, 36];
} else if (width > 420 && width <= 755) {
    zoomValue = 13;
    // iconSize = [28, 34];
} else {
    zoomValue = 11;
    // iconSize = [26, 32];
}

function init() {
  var map = new ymaps.Map('map', {
    center: [55.759816, 37.618647],
    zoom: zoomValue,
    controls: [],
    behaviors: ['drag', 'dblClickZoom']
  });

  // если массив с метками
  placemarks.forEach(function(item) {
    var placemark = new ymaps.Placemark([item.latitude, item.longitude], {
      hintContent: item.hintContent,
      balloonContent: item.balloonContent
    },
    {
      iconLayout: 'default#image',
      // iconImageHref: 'https://psv4.userapi.com/c856228/u30750589/docs/d15/8b07c7a6a89b/icon-map1.png?extra=3CkRUTuBNoiLjA7eP-2y0P09LudZ83tvZ82hI6SlhaAV6u7MKc8DIWLalPoiWZmLAutH1rEzaEy2NpwkfatEt1LTC8V-MPICYtkLpkXjatLcTQWfhLK67T4K95UPNDT_6w8g9RgBYoKezYoZQeA5SAM',
      iconImageHref: 'https://svgshare.com/i/Hg2.svg',
      // iconImageOffset: [],             // смещение иконки
      // iconImageSize: [100, 115]
      iconImageSize: [30, 36]
      });
    map.geoObjects.add(placemark);
  })


  // var myPlacemark = new ymaps.Placemark([55.772709, 37.675886], {
  //   // хинт (наведение)
  //   hintContent: 'Клиника',
  //   // балун (по клику)
  //   balloonContent: 'Наш адрес: г. Москва, Шлюзовая наб., дом 2/1, стр.1'
  // },
  // {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://psv4.userapi.com/c856228/u30750589/docs/d15/8b07c7a6a89b/icon-map1.png?extra=3CkRUTuBNoiLjA7eP-2y0P09LudZ83tvZ82hI6SlhaAV6u7MKc8DIWLalPoiWZmLAutH1rEzaEy2NpwkfatEt1LTC8V-MPICYtkLpkXjatLcTQWfhLK67T4K95UPNDT_6w8g9RgBYoKezYoZQeA5SAM',
  //   iconImageSize: [50, 55]
  //   // Смещение левого верхнего угла иконки относительно
  //   // её "ножки" (точки привязки).
  //   // iconImageOffset: [-16, -16],
  // }
  // );
  // map.geoObjects.add(myPlacemark);

  var zoomControl;
  if (width > 1700) {
    zoomControl = new ymaps.control.ZoomControl({options: {
      position: { right: 50, top: 250 }
    }});
  } else if (width > 1000 && width <= 1700) {
    zoomControl = new ymaps.control.ZoomControl({options: {
      position: { right: 50, top: 140 }
    }});
  } else if (width > 756 && width <= 1000) {
    zoomControl = new ymaps.control.ZoomControl({options: {
      position: { right: 30, top: 90 }
    }});
  } else if (width < 756) {
    zoomControl = new ymaps.control.ZoomControl({options: {
      position: { right: 30, top: 110 }
    }});
  }

  // var zoomControl = new ymaps.control.ZoomControl({options: {
  //   position: { right: 50, top: top }
  // }});

  map.controls.add(zoomControl);
}
