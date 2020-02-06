$(document).ready(function() {
			$('.toggleable1').hide();
			$('#toggler1').click(function() {
				$('#toggler1').toggleClass('rotate');
				$('.toggleable1').slideToggle(500);})

				$('.toggleable2').hide();
			$('#toggler2').click(function() {
				$('#toggler2').toggleClass('rotate');
				$('.toggleable2').slideToggle(500);})

				$('.toggleable3').hide();
			$('#toggler3').click(function() {
				$('#toggler3').toggleClass('rotate');
				$('.toggleable3').slideToggle(500);})

				$('.toggleable4').hide();
			$('#toggler4').click(function() {
				$('#toggler4').toggleClass('rotate');
				$('.toggleable4').slideToggle(500);})

				$('.toggleable5').hide();
			$('#toggler5').click(function() {
				$('#toggler5').toggleClass('rotate');
				$('.toggleable5').slideToggle(500);})

				$('.toggleable6').hide();
			$('#toggler6').click(function() {
				$('#toggler6').toggleClass('rotate');
				$('.toggleable6').slideToggle(500);})

			
				
			
		});
		

		$('document').ready(function() {
			$('#slideP').hide();
			$('#slidePToggler').click(function() {
				$('#slideP').slideToggle(400)
							});


			$('#izdeliya').hide();
			$('#izTog').click(function() {
				$('#izdeliya').slideToggle(500);
				$('.fas').toggleClass('rotate');
			});


				var carouselEl = $('.uslugi-owl');

    carouselEl.owlCarousel({
        items: 3
    });

    $(".prev").click(function() {
        carouselEl.trigger('next.owl.carousel');
    });

    $(".next").click(function() {
        carouselEl.trigger('prev.owl.carousel');
    });
		})