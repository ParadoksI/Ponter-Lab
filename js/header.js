// document.getElementById('toggleBtn').addEventListener('click', function() {
//     var header = document.getElementById('header');
//     var toggleBtn = document.getElementById('toggleBtn');
//     var mainContent = document.getElementById('main');
//     var section = document.getElementById('section');

//     if (window.innerWidth <= 710) { 
//         if (header.classList.contains('closed')) {
//             header.style.top = '0';
//             header.classList.remove('closed');
//             toggleBtn.innerHTML = '&#10006;';
//         } else {
//             header.style.top = '-100%';
//             header.classList.add('closed');
//             toggleBtn.innerHTML = '&#9776;';
//         }
//     } else {
//         if (header.classList.contains('closed')) {
//             header.style.left = '0';
//             header.classList.remove('closed');
//             toggleBtn.innerHTML = '&#10006;';
//             toggleBtn.style.left = '0px';
//             mainContent.style.marginLeft = '200px';
//         } else {
//             header.style.left = '-300px';
//             header.classList.add('closed');
//             toggleBtn.innerHTML = '&#9776;';
//             toggleBtn.style.left = ''; 
//             mainContent.style.marginLeft = '0';
            
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var mainContent = document.getElementById('main');
//     var section = document.getElementById('section');

//     if (window.innerWidth > 710) { 
//         section.style.margin = '0px 160px';
//     }
// });


// // Функция для обновления стилей в зависимости от размера окна
// function updateStyles() {
//     var header = document.getElementById('header');
//     var toggleBtn = document.getElementById('toggleBtn');
//     var mainContent = document.getElementById('main');
//     var section = document.getElementById('section');

//     if (window.innerWidth <= 710) {
//         header.style.left = '0'; // Возвращаем header на место, если он был скрыт на компьютере
//         if (header.classList.contains('closed')) {
//             header.style.top = '0';
//             toggleBtn.innerHTML = '&#10006;';
//         } else {
//             header.style.top = '-100%';
//             toggleBtn.innerHTML = '&#9776;';
//         }
//         toggleBtn.style.left = ''; // Сбрасываем стили кнопки toggleBtn
//         mainContent.style.marginLeft = '0'; // Сбрасываем стили для mainContent
//         section.style.margin = '0px 20px'; // Уменьшаем margin для section на мобильных устройствах
//     } else {
//         header.style.top = '0'; // Возвращаем header на место, если он был скрыт на мобильном устройстве
//         if (header.classList.contains('closed')) {
//             header.style.left = '-300px';
//             toggleBtn.innerHTML = '&#9776;';
//         } else {
//             header.style.left = '0';
//             toggleBtn.innerHTML = '&#10006;';
//         }
//         section.style.margin = '0px 160px'; // Устанавливаем margin для section на компьютере
//     }
// }

// // Добавляем обработчик события изменения размера окна
// window.addEventListener('resize', function() {
//     updateStyles();
// });

// // Вызываем функцию updateStyles() при загрузке страницы
// document.addEventListener('DOMContentLoaded', function() {
//     updateStyles();
// });

$(document).ready(function() {
    
    $('#toggleBtn').click(function() {
        $('.wrapper').toggleClass('active');
        $('#header').toggleClass('active');
        $('.header__button').toggleClass('active');
        if ($('.header__button').hasClass('active')) {
            $('.header__button').html('&#10006;');
        } else {
            $('.header__button').html('&#9776;');
        }
    });
});