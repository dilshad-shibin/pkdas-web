!(function (v) {
    "use strict";
  
        jQuery(document).ready(function () {
            
      (function () {
                    var e = v(".promo-slider");
                    if (e.length) {
                        var r = v(".promo-slider__count"),
                            i = v(".slider__nav--promo .slider__prev"),
                            s = v(".slider__nav--promo .slider__next");
                        e.on("init afterChange", function (e, i, s, t) {
                            var o = (s || 0) + 1;
                            r.text(o + "/" + i.slideCount);
                        }),
                            e.slick({ fade: !0, adaptiveHeight: !0, infinite: !0, speed: 1200,pauseOnHover: false, autoplay: true,
            autoplaySpeed: 3000, prevArrow: i, nextArrow: s });
                    }
                })()
           
                
        });
})(jQuery);

if ($('#hmnews-slider').length) {
        $('#hmnews-slider').slick({
            autoplay: false,
			pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            dots: false,
            arrows: true,
			prevArrow:'.navid1 .prev',
            nextArrow:'.navid1 .next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						adaptiveHeight: true,
						dots: false
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						
						
                    }
                },
				{
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    

if ($('#dptnews-slider').length) {
        $('#dptnews-slider').slick({
            autoplay: false,
			pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            dots: false,
            arrows: true,
			prevArrow:'.navid3 .prev',
            nextArrow:'.navid3 .next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						adaptiveHeight: true,
						dots: false
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						
						
                    }
                },
				{
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
	
if ($('#spdpt-slider').length) {
        $('#spdpt-slider').slick({
            autoplay: false,
			infinite:false,
			pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            speed: 2000,
            dots: false,
            arrows: true,
			prevArrow:'.navid2 .prev',
            nextArrow:'.navid2 .next',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						adaptiveHeight: true,
						dots: false
                    }
                },
				{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						
						
                    }
                },
				{
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }	

    // :: 11.0 TEAM SLIDER ACTIVE CODE
    $('.team-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
	
function popfunction() {
    var popupscript = document.getElementById("mbbtnpopid");
    popupscript.classList.toggle("open");
  }

 $('.totop').tottTop({
            scrollTop: 100
        });  

