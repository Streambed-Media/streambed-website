$(document).ready(function () {

  $('.navbar-toggler').on('click', function () {

    $('.animated-btn').toggleClass('open');
  });


  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 1) {
        $("header").addClass("header_fixed");
    }else {
        $("header").removeClass("header_fixed");
    }
});
});