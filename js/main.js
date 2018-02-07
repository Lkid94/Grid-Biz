$(document).ready(function() {

    $('.pic').hover(function() {
        $(this).find('.hover-pic').fadeIn(300);
    }, function() {
        $(this).find('.hover-pic').fadeOut(80);
    });
});