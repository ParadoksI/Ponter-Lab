$(document).ready(function(){
    if($(window).width() < 710) { 
        $('.serv__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            dots: true,
            arrows: false,
            centerMode : false,
            centerPadding : "30px"
        });
        
    }
});