$(document).ready(function () {
    var prevArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="prev-arrow" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/> </svg>';
    var nextArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="next-arrow" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/> </svg>';

    $('.gallery__slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow  
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


        $('.gallery__item__disc').slideUp(500);


        $this.find('.gallery__item__disc').slideDown(500);

        $otherItems.find('.gallery__check').text('+');
    });

    
});
