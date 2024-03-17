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

    

    // $('#phoneInput').inputmask('+7 (999) 999-99-99');
    $('#phoneInput').inputmask('+9[99] (999) 999-99-99');
});