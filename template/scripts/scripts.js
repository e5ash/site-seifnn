$(document).ready(function($) {
	$('.slider__list').slick({
		slidesToShow: 5,
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>'
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
});