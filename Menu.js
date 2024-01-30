$(document).ready(function () {
    $('.left-nav').click(function () {
        $('.list-fill-nav').toggleClass('show');
    });
    $('.close-menu').click(function () {
        $('.list-fill-nav').removeClass('show');
    });
    $('.list-fill-nav li a').click(function (e) {
        $(this).siblings('.sub-menu').addClass('show');
        $('.list-fill-nav').css('overflow-y', 'hidden');
    });
    $('.list-fill-nav li a').click(function(e) {
        var href = $(this).attr('href');
        if (href && href !== '#') {
        } else {
            e.preventDefault();
        }
    });
    $('.Back-menu').click(function () {
        $(this).closest('.sub-menu').removeClass('show');
        $('.list-fill-nav').css('overflow-y', 'auto');
    });
    $('.sub-menu li a').click(function (e) {
        $(this).siblings('.sub2-menu').addClass('show');
        $('.sub-menu').css('overflow-y', 'hidden');
    });
    $('.sub-menu li a').click(function(e) {
        var href = $(this).attr('href');
        if (href && href !== '#') {
        } else {
            e.preventDefault();
        }
    });
    $('.Back2-menu').click(function () {
        $(this).closest('.sub2-menu').removeClass('show');
        $('.sub-menu').css('overflow-y', 'auto');
    });
});