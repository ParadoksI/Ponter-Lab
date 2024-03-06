$(document).ready(function(){
    if($(window).width() < 710) { 
        $('.serv__list').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: false,
            dots: true,
            arrows: false,
            centerMode : true,
            centerPadding : "60px"
        });
        
    }
});