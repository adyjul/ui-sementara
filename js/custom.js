(function ($) {
	
	"use strict";

	$('.scroll-to-section').on('click',function(e){
		var href = $(this).attr('href');
		
		var elementHref = $(href);
		
		$('body').animate({
			scrollTop : elementHref.offset().top - 50
		},2000,'swing');


		//e.preventDefault();
		
	})



	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.left-content').height()-20;
	  var header = $('.navbar').height();

	  if (scroll >= box - header) {
	    $(".navbar").addClass("fixed-top");
		
	  } else {
	    $(".navbar").removeClass("fixed-top");
	
	  }
	});
	
	$('.input-group.date').datepicker({format: "dd.mm.yyyy"});
	

	$(".lomba-1").owlCarousel({
		autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
	});
   
	$(".guru-1").owlCarousel({
		autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }

	});




	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);   