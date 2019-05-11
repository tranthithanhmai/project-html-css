$(document).ready(function () {
    var navHeight = $(window).height();
    var message = $("#message").position();
    var business = $("#business").position();
    var corporate = $("#corporate").position();
    var recruit = $("#recruit").position();
    var contact = $("#contact").position();
    var top = $("#top").position();
    $(window).bind('scroll', function () {
        if (navHeight > 600) {

            if ($(window).scrollTop() > navHeight) {
                $('.menu-header').addClass('sticky-menu');
            }
            else {
                $('.menu-header').removeClass('sticky-menu');
            }

        } else {
            navMobile = navHeight - 350;
            if ($(window).scrollTop() > navMobile) {
                $('.menu-header').addClass('sticky-menu');
            }
            else {
                $('.menu-header').removeClass('sticky-menu');
            }
        }

    });

    var scrollTop = $(".scroll-to-top");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 1000) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });
    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;

    });

    $('.link-message').click(function () {
        $('html, body').animate({
            scrollTop: message.top - 200
        }, 1000);
        return false;

    });

    $('.link-business').click(function () {
        $('html, body').animate({
            scrollTop: business.top - 200
        }, 1000);
        return false;

    });

    $('.link-corporate').click(function () {
        $('html, body').animate({
            scrollTop: corporate.top - 200
        }, 1000);
        return false;

    });

    $('.link-recruit').click(function () {
        $('html, body').animate({
            scrollTop: recruit.top
        }, 1000);
        return false;

    });

    $('.link-contact').click(function () {
        $('html, body').animate({
            scrollTop: contact.top
        }, 1000);
        return false;

    });

    $('.link-top').click(function () {
        $('html, body').animate({
            scrollTop: top.top
        }, 1000);
        return false;

    });
});

function anchorTab(control) {
    $('.menu-item').removeClass('active');
    control.closest('.menu-item').addClass('active');
}
