$(function() {

  var $win = $(window),
    $header = $('header'),
    animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if (value > 100) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });


  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });

  $('.menu').css("opacity", "0");
  $(window).scroll(function() {
    $(".effect01").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $('.effect01 h1').addClass('tracking-in-expand');

      } else {
        $('.effect01 h1').removeClass('tracking-in-expand');

      }


    });
  });

  $('.news').css("opacity", "0");
  $(window).scroll(function() {
    $(".effect02").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $('.effect02 h1').addClass('tracking-in-expand');

      } else {
        $('.effect02 h1').removeClass('tracking-in-expand');

      }


    });
  });

  $('.access').css("opacity", "0");
  $(window).scroll(function() {
    $(".effect03").each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $('.effect03 h1').addClass('tracking-in-expand');

      } else {
        $('.effect03 h1').removeClass('tracking-in-expand');

      }


    });
  });


  jQuery(function($) {
    var retb = $('#return');
    $(retb).hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(retb).fadeIn();
      } else {
        $(retb).fadeOut();
      }
    });
    $(retb).click(function() {
      $('html,body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  });

  jQuery(function($) {
    var retb = $('#phone');
    $(retb).hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(retb).fadeIn();
      } else {
        $(retb).fadeOut();
      }
    });
    // $(retb).click(function() {
    //   $('html,body').animate({
    //     scrollTop: 0
    //   }, 300);
    //   return false;
    // });
  });

});
