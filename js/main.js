$(function() {


    $('.nav_btn_to-phone').on('click', function() {
        $('.menu_to-phone').addClass('active');
        $('.nav_btn_to-phone').addClass('press');
        $('.close_btn').addClass('press');
    });
    $('.close_btn').on('click', function() {
        $('.menu_to-phone').removeClass('active');
        $('.nav_btn_to-phone').removeClass('press');
        $('.close_btn').removeClass('press');
    });


});