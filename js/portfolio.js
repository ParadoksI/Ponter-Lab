$(document).ready(function () {
    $('.gallery__slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
        });
    });

    var $firstItem = $('.gallery__item:first-child');
    var $firstSlider = $('.gallery__slider:first-child');
    $firstItem.addClass('active');
    $firstSlider.addClass('active');
    $firstItem.find('.gallery__item__disc').slideDown(500);
    $firstItem.find('.gallery__check').text('-');

    $('.gallery__item').on('click', function () {
        var $this = $(this);
        var $otherItems = $this.siblings('.gallery__item');
        var index = $this.index();
        $('.gallery__slider').eq(index).slick('slickNext');
        $('.gallery__slider').eq(index).slick('slickPrev');
        var $check = $this.find('.gallery__check');

        var $this = $(this);
        var index = $this.index();

        $('.gallery__slider').removeClass('active');

        $('.gallery__slider').eq(index).addClass('active');

        $('.gallery__slider').slideUp(500, function () {
            $('.gallery__slider').eq(index).slideDown(500);
            setTimeout(function () {
                $('.gallery__slider').eq(index).slick('slickNext');
                $('.gallery__slider').eq(index).slick('slickPrev');
            }, 500);
        });

        $check.text($check.text() == '-' ? '+' : '-');

        // Скрываем все описания
        $('.gallery__item__disc').slideUp(500);

        // Сворачиваем описание текущего элемента
        $this.find('.gallery__item__disc').slideDown(500);

        // Заменяем текст на "+", если он не у текущего элемента
        $otherItems.find('.gallery__check').text('+');
    });
});
