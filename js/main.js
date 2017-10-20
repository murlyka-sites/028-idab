$(document).ready(function(){
	svg4everybody();

	$("[data-fancybox]").fancybox({
		 autoFocus : false,
		 scrolling : 'auto'
	});

	$("video").click(function() {
		var $video = $(this).get(0);
		if($video.paused) {
			$video.play();
		} else {
			$video.pause();
		}
	});

	// $.fancybox.open({src: "#course-1"})

	$(".slider-video__container").slick({		
		slidesToShow: 2,
		prevArrow: $(".slider-video__arrow_prev"),
		nextArrow: $(".slider-video__arrow_next"),
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".slider-exp__container").slick({
		prevArrow: $(".slider-exp__arrow_prev"),
		nextArrow: $(".slider-exp__arrow_next"),
		// fade: true,
		infinite: false
	});

	$(".nav-top__link").click(function() {
		offset = 0;

		// if($(window).width() >= 768) {
		offset = $(".section-header").height();
		// }

		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - offset }, 1000);
		e.preventDefault();
	});

})