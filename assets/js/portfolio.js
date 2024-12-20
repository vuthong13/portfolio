$(document).ready(function() {
	const lenis = new Lenis();

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	$("a[href^='#']").on('click', function() {
		var t = $(this).attr('href');
		if ($(t)) {
			$("html, body").animate({ scrollTop: $(t).offset().top }, 800);
			$('.sidebar').removeClass('active');
			$('.menu-btn').removeClass('active');
		}
		return false;
	})

	$('.content-portfolio .block .block-img').each(function(i, item) {
		if ($(item).children().length > 1)
			$(item).slick({
				dots: true,
				infinite: false
			});
	})

	$(".to-top").on('click', function() {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	})

	Fancybox.bind("[data-fancybox]", {
	  idle: false,
	});

	$('.menu-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('active');
	})

	setTimeout(function() {
		AOS.init({
			duration: 1000,
		});
	}, 4000)
})

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll load', function() {
	$('.content > div').each(function(i, item) {
		if ($(window).scrollTop() + 300 >= $(item).offset().top) {
			let id = $(item).attr('id');
			$('.sidebar .nav li a').removeClass('active');
			$('.sidebar .nav li a[href="#' + id + '"]').addClass('active');
		}
	})
	let t = 0;
	if ($('.pre-loader-02').css("visibility") != "hidden")
		t = 4000;
	setTimeout(function() {
		$('.h2 .color1').each(function(i, item) {
			if ($(item).isInViewport()) {
				setTimeout(function() {
					$(item).addClass('active');
				}, 400)
			}
			else {
				$(item).removeClass('active');
			}
		})

		const counters = $('.content-about .block .num .color1');
		const speed = 5000;

		counters.each(function(i, counter) {
			function animate() {
				const value = parseInt($(counter).attr('akhi'));
				const data = parseInt($(counter).text());

				const time = value / speed;

				if (data < value) {
					$(counter).text(Math.ceil(data + time));
					setTimeout(animate, speed / value);
				} else {
					$(counter).text(value);
				}
			 
			}
			if ($(counter).isInViewport())
				animate();
			else
				$(counter).text(0);
		});
	}, t)

	if ($(window).scrollTop() >= $(window).height())
		$('.to-top').fadeIn();
	else
		$('.to-top').fadeOut();
})