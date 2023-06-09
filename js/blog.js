$('.slick').slick({
    dots: false,
    infinite: true,
	touchThreshold : 100,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 3,
	centerMode: true,
	nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});