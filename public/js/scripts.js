(function ($, window, document, undefined) {

  //Sticky Header
  var nav = $('.header');
  if (nav.length) {
    var stickyNavTop = nav.offset().top;
    $(window).scroll(function () {
      if ($(window).scrollTop() > stickyNavTop) {
        $('.header').addClass('sticky');
      } else {
        $('.header').removeClass('sticky');
      }
    });
  }

  // Search Bar
 $('.menu-search').click(function() {
 	$('.search-container').toggleClass('hidden');
 	$(".header").toggleClass('is-open');
 	$("html, body").toggleClass('no-scroll');
 	$('.mobile-logo').toggleClass('hidden');
  });

  // Buy | Login Bar
//  $('.menu-buy').click(function() {
//    $("html, body").toggleClass('no-scroll');
//    $(".header").toggleClass('is-open');
//    $('.buy-container').toggleClass('hidden');
//    $('.mobile-logo').toggleClass('hidden');
//   });

  // Toggle .is-open class on menu
  $( ".hamburger" ).click(function() {
    $(".header").toggleClass('is-open');
    $("html, body").toggleClass('no-scroll');
  });

  // Truncate quotes over 300 characters
  $(".testimonial").each(function(index) {
    var quote = $(this).text();
    var characterCount = $(this).text().length;

    if (characterCount > 300) {
      var shortQuote = $.trim(quote).substring(0, 200).split(" ").slice(0, -1).join(" ") + "...";
      $(this).html('<p>' + shortQuote + '</p>');
    }
  });

  // only show one about-us--fact on mobile
  function showOneFact() {
    if ($(window).width() < 639) {
      $(".about-us--facts").children().next().css('display', 'none');
      $(".about-us--facts").parent().toggleClass('center-align');
    }
  }

  showOneFact();

  $(window).resize(function() {
    showOneFact();
  });

// about-us sticky scroll
// function stickyTop() {
// 	//var etop = ($('.text-scroll-wrapper').offset().top) - 150;
// 	var factstop = ($('.about-us--facts').offset().top) - 150;
// 	var height = ($('#fade-text').height());
// 	//var bottom = factstop + height;




// 	var sectionTop = ($('#about-us-wrapper').offset().top) - 150;
// 	var blackBar = ($('#about-us-black-bar'));

// 	var aboutRow = document.getElementById('about-us-row');
// 	var fadeText = document.getElementById('about-us-facts');
// 	var fadeRect = fadeText.getBoundingClientRect();
// 	var fadeRectHeight = fadeRect.height;
//   var fadeRectBottom = fadeRect.top + fadeRectHeight;
//   console.log("FadeRect Top " + fadeRect.top);
//   console.log("FadeRect Height " + fadeRectHeight);
//   console.log("FadeRectBottom " + fadeRectBottom);
// 	//console.log("fade" + fadeRectHeight);
// 	$(window).scroll(function () {
// 		var aboutRowRect = aboutRow.getBoundingClientRect();
// 		console.log("About row " + aboutRowRect.top);
//     console.log("Fade Text " + fadeRect.top);
//     console.log("About Height " + aboutRowRect.height);
//     console.log("Fade height " + fadeRectHeight);
// 		if(aboutRowRect.top < 150)  {
// 			blackBar.addClass("sticky");
// 			//$('.text-scroll-wrapper').addClass("sticky");

// 		} else if(aboutRowRect.top <= aboutRowRect.height) {
// 			blackBar.removeClass("sticky");
// 		} else {
//       blackBar.removeClass("sticky");
//     }
// 	});
// }


$(document).ready(function() {

	//stickyTop();

});

})(jQuery, window, document)
