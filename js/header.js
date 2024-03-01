$(document).ready(function () {
    if ($(window).width() > 710) {
        $('#toggleBtn').click(function () {
            $('.wrapper').toggleClass('active');
            $('#header').toggleClass('active');
            $('.header__button').toggleClass('active');
            if ($('.header__button').hasClass('active')) {
                $('.header__button').html('&#10006;');
            } else {
                $('.header__button').html('&#9776;');
            }
        });
    } else { 
        $('#toggleBtn').on('click', function () {
            $('.header__list').slideToggle(500, function() {
                
            }).css('display', 'flex');
        });
    }

    
});