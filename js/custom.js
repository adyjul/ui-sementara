// (function ($) {
//   "use strict";

$(document).ready(function () {
  //   $(".scroll-to-section").on("click", function (e) {
  //     var href = $(this).attr("href");

  //     var elementHref = $(href);

  //     $("body").animate(
  //       {
  //         scrollTop: elementHref.offset().top - 50,
  //       },
  //       2000,
  //       "swing"
  //     );

  //     //e.preventDefault();
  //   });

  var elementWindow = $(document).width();
  if (979 >= elementWindow) {
    $(".modal-dialog").css("height","70%");    
  } 

  $(window).resize(function () {
    // console.log($(document).width())
    var element = $(document).width();
    if (979 >= element) {
      $(".modal-dialog").css("height","70%");  
    }
  });

  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  $(".post-wrapper").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".slider").height() - 20;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");
      $(".navbar").css("position", "fixed");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").css("position", "relative");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".left-content").height() - 100;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  $(".input-group.date").datepicker({ format: "dd.mm.yyyy" });

  $(".lomba-1").owlCarousel({
    loop: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  $(".guru-1").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    margin: 5,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Window Resize Mobile Menu Fix
  mobileNav();

  // Scroll animation init
  window.sr = new scrollReveal();

  // Window Resize Mobile Menu Fix
  $(window).on("resize", function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $(".submenu").on("click", function () {
      if (width < 767) {
        $(".submenu ul").removeClass("active");
        $(this).find("ul").toggleClass("active");
      }
    });
  }
});

// })(window.jQuery);
