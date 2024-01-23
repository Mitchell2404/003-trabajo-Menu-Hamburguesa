$(document).ready(function () {
    $('.left-nav').click(function () {
        $('.list-fill-nav').toggleClass('show');
    });

    $('.close-menu').click(function () {
        $('.list-fill-nav').removeClass('show');
    });

    $('.Back-menu').click(function () {
        $('.sub-menu').removeClass('show');
        $('.list-fill-nav').css('overflow-y','auto')
    });
    $('.list-fill-nav li a').click(function (e) {
        e.preventDefault();
        $(this).siblings('.sub-menu').addClass('show');
        $('.list-fill-nav').css('overflow-y','hidden')
    });
    
});