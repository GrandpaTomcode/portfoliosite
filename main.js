// mobile nav toggle

  $( ".mobNavBtn" ).click(function() {
    $( ".mobNav" ).slideToggle( "fast");
  });

  // mobile Nav close

  $(".mobNav a[href^='#']").click(function () {
    $('.mobNav').slideUp(0);
  });

  //Contact Form selection

  $('.input').click(function(event) {
        $(".input.active").removeClass("active");
        $(this).addClass('active');
        event.preventDefault();
  });

// Nav link to about section
  $('a[href^="#aboutContainer"]').on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({
    scrollTop: $("#aboutContainer").offset().top
}, 500);
      });

// CTA and Nav link to contact section
  $('a[href^="#contactpageTitle"]').on('click', function(event) {
          event.preventDefault();
          $('html, body').animate({
    scrollTop: $("#contactpageTitle").offset().top
}, 500);
      });
