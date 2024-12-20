function backToTopBtn() {
    if ($(window).scrollTop() > $(window).height() / 2)
        $('.back-to-top').addClass('show');
    else
        $('.back-to-top').removeClass('show');

    if ($(window).scrollTop() + $(window).height() < $(document).height() - $('footer').height())
        $('.back-to-top').addClass('sticky');
    else
        $('.back-to-top').removeClass('sticky');
}

$(document).ready(function() {
    AOS.init({
        duration: 800,
        once: 1,
        offset: 0,
        disable: "mobile"
    });

    backToTopBtn();

    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })

    $('a[href^="#"], .header-menu a, .url-list a').on('click', function () {
        var target;
        var t = $(this).attr('href');
        if (t.indexOf('#') >=0) {
            target = t.substring(t.indexOf('#'));
        }
        if ($(target).length) {
            var t = 50;
            if ($(window).width() > 768) {
                if (!$(target).hasClass('aos-animate'))
                    t = 150;
            }
            $('html, body').animate({
                scrollTop: $(target).offset().top - $('.header').outerHeight() - t
            }, 800)
            if ($(window).width() <= 768) {
                $('body').removeClass('menu-open');
                $('.menu-sp').fadeOut();
            }
            return false;
        }
    })

    var target = window.location.hash;
    if ($(target).length) {
        $(window).scrollTop(0);
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('.header').outerHeight() - 150
        }, 800)
    }

    $('.header-btn').on('click', function() {
        if (!$('body').hasClass('menu-open')) {
            $('body').addClass('menu-open');
            $('.menu-sp').fadeIn();
            
        }
        else {
            $('body').removeClass('menu-open');
            $('.menu-sp').fadeOut();
        }
    })
})

$(window).on('scroll', function() {
    backToTopBtn();
})