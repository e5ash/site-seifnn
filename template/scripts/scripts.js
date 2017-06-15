$(document).ready(function($) {
	$('.slider__list').slick({
		slidesToShow: 5,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>',
		responsive: [{

	      breakpoint: 1311,
	      settings: {
	        slidesToShow: 3,
	        infinite: true
	      }}, {
	      breakpoint: 671,
	      settings: {
	        slidesToShow: 2,
	        infinite: true
	      }}, {
	      breakpoint: 501,
	      settings: {
	        slidesToShow: 1,
	        infinite: true
	      }

    }]

	});

	var navHidden = $('.nav__hidden'),
		navLink = $('.nav .container > ul > li:nth-of-type(2)');

	navLink.hover(function() {
		navHidden.toggleClass('nav__hidden_toggle');
		
	}, function() {
		navHidden.toggleClass('nav__hidden_toggle');
		
	});
	navHidden.hover(function() {
		navHidden.toggleClass('nav__hidden_toggle');
		navLink.addClass('nav__item_hover');
	}, function() {
		navHidden.toggleClass('nav__hidden_toggle');
		navLink.removeClass('nav__item_hover');
	});
	


	var navBtn = $('.nav__btn'),
		navList = $('.nav .container > ul');

	navBtn.click(function() {
		$(this).toggleClass('nav__btn_toggle');
		navList.slideToggle(0);
	});

	var w = $(window);

	w.on('resize', function() {
		var windowWidth = $(this).width();
		if (windowWidth > 1085) {
			navList.removeAttr('style');
			navBtn.removeClass('nav__btn_toggle');
		}
	});
});