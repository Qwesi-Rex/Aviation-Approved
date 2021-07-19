$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 


		  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('site-header-scrolled')
      } else {
        selectHeader.classList.remove('site-header-scrolled')
      }
    }
    window.addEventListener('load', site-headerScrolled)
    onscroll(document, site-headerScrolled)
  }


		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});


	// Empty Legs

	$(document).ready(function(){
		$("#myInput").on("keyup",function(){
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function(){
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	
		});
	
		});
	
		});


	// Hidden Forms 

	$(document).ready(function() {
		$("#toggle").click(function() {
			$("#round-trip").show(1000);
		});
	});

	$(document).ready(function() {
		$("#multi-leg").click(function() {
			$("#booking_2").show(1000);
		});
	});

	$(document).ready(function() {
		$("#multi-leg").click(function() {
			$("#booking_3").show(1000);
		});
	});

	$(document).ready(function() {
		$("#multi-leg").click(function() {
			$("#booking_4").show(1000);
		});
	});

	$(document).ready(function() {
		$("#closer").click(function() {
			$("#round-trip").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#closer_x").click(function() {
			$("#booking_2").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#closer_x").click(function() {
			$("#booking_3").hide(1000);
		});
	});

	$(document).ready(function() {
		$("#closer_x").click(function() {
			$("#booking_4").hide(1000);
		});
	});

	
	  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

   /**
   * Disable AOS animation of mobile view
   */
  AOS.init({disable: 'mobile'});
	

   /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


	
