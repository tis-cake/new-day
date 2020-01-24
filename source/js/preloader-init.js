// https://github.com/Nebir/Circular-Progress-Bar

$(document).ready(function () {

  var width = $(window).width();
  if (width >= 756) {                       // прелоадер только на десктопе

    var preloader    = $('#preloader'),     // селектор прелоадера
        imagesCount  = $('img').length,     // количество изображений
        dBody        = $('body'),           // обращаемся к body
        percent      = 100 / imagesCount,   // количество % на одно изображение
        progress     = 0,                   // точка отсчета
        imgSum       = 5,                   // минимальное кол-во изображений для вызова прелоадера
        loadedImg    = 0;                   // счетчик загрузки изображений

    if (imagesCount >= imgSum && imagesCount > 0) { // если кол-во изображений на сайте >= минимальному количеству
                                                    //  для вызова прелоадера
        preloader.css('background', '#fff');
        dBody.css('overflow', 'hidden');          // убрать скролл пока есть прелоадер

        $(".dws-progress-bar").circularProgress({ // вызвать прогресс-бар
            color: "#14b250",
            line_width: 17,
            height: "350px",
            width: "350px",
            percent: 0,
            // counter_clockwise: true,
            starting_position: 25
        }).circularProgress('animate', percent, 1000);

        for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений;
                                                //   на каждом клоне отображаем % одного изображения
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = img_load;     // отслеживаем загрузку изображений, if true - вызов функции
            img_copy.onerror    = img_load;     // or if false
        }

        function img_load () {                  // запуск прелоадера и прибавление процента
            progress += percent;
            loadedImg++;
            if (progress >= 100 || loadedImg == imagesCount) { // if прогресс >= 100% или кол-во загруженных
                                                               //   изображений = кол-ву изображений всего
                preloader.delay(400).fadeOut('slow');          // удалить прелоадер
                dBody.css('overflow', '');                     // добавить скролл к body
            }
            $(".dws-progress-bar").circularProgress('animate', progress, 500); // иначе вызвать прогресс-бар
        }
    } else {
        preloader.remove();
    }
  }

});



