$(document).ready(function() {
    $('.serv__card__btn').mousemove(function(event) {
        var x = event.pageX - $(this).offset().left;
        var y = event.pageY - $(this).offset().top;
        var percentX = Math.floor((x / $(this).outerWidth()) * 100);
        var percentY = Math.floor((y / $(this).outerHeight()) * 100);
        $(this).css('background-image', 'radial-gradient(circle at ' + percentX + '% ' + percentY + '%, var(--hover-blue), var(--main-blue))');
    });

    $('.serv__card__btn').mouseleave(function() {
        $(this).css('background-image', 'none');
    });
});