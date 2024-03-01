$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });
    });

    gsap.utils.toArray('.benefits__item').forEach(item => {
        gsap.fromTo(item.querySelector('.benefits__disc'), {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 80%", // Начать анимацию, когда верх 80% элемента появится в видимой области
                toggleActions: "play none none none" // Опции запуска анимации
            }
        });
    });

    $('.serv__card__btn').mousemove(function (event) {
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;
        var percentX = Math.floor((x / $(this).outerWidth()) * 100);
        var percentY = Math.floor((y / $(this).outerHeight()) * 100);
        $(this).css('background-image', 'radial-gradient(circle at ' + percentX + '% ' + percentY + '%, var(--hover-blue), var(--main-blue))');
    });

    $('.serv__card__btn').mouseleave(function () {
        $(this).css('background-image', 'none');
    });

    $('#phoneInput').inputmask('+7 (999) 999-99-99');
});