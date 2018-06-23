$(document).ready(function(){
	svg4everybody();

	$('.card-video').lazyYT('AIzaSyCO3kDE-UL6QOlRIXlmf-ix2tT5ddo___s')

	$("[data-fancybox]").fancybox({
		 autoFocus : false,
		 scrolling : 'auto'
	});

	new Swiper('.slider-video__container', {
		speed: 400,
		slidesPerView: 2,
		navigation: {
			prevEl: '.slider-video__arrow_prev',
			nextEl: '.slider-video__arrow_next'
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			}
		}

	});
	new Swiper('.slider-exp__container', {
		speed: 400,
		autoHeight: true,
		navigation: {
			prevEl: '.slider-exp__arrow_prev',
			nextEl: '.slider-exp__arrow_next'
		}
	});

	$(".nav-top__link").click(function() {
		offset = 0;

		offset = $(".section-header").height();

		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - offset }, 1000);
		e.preventDefault();
	});

	$("form").submit(function() {
		var $that = $(this);

		$.ajax({
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			success: function() {
				$that.trigger("reset");

				$.fancybox.close();
				$.fancybox.open({src: "#success"});
			}
		})

		return false;
	});
})