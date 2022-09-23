$('.team-carousel').slick({
	mobileFirst: true,
	autoplay: true,
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 2 },
		},

		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
