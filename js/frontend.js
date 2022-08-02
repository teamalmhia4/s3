$(document).ready(function () {

  'use strict';

  $(".our-button").on('click', function(){
    $(this).toggleClass('transformed');
  });

  $(window).scroll(function () {
    var navbar = $('.main-navbar');
    $(window).scrollTop() >= 20 ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
  });

 $('.header .overlay .icon-down i').click(function () {
    $('html, body').animate({
        scrollTop: $('.aboutus').offset().top
    }, 1000);
      
  });

 $('.header .overlay .info span').click(function () {
    $('html, body').animate({
        scrollTop: $('.contact').offset().top
    }, 1000);
      
  });
  
  $(".result").click(function(){
        $(this).hide();
    });

 var typed = new Typed('#typed', {
      strings: ["MULTI PLATFORM WITH ONE 'CRM'"
                , "Get setup in less than 3 weeks"],
      typeSpeed:50,
      backSpeed:50,
      loop: true
    });

            new WOW().init();


  $('.main-navbar .setting-navbar ul,.sidebar ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });
  
});

(function () {
    "use strict";
    var $body = document.body,
        $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];
    if (typeof $menu_trigger !== 'undefined') {
        $menu_trigger.addEventListener('click', function () {
            $body.className = ($body.className === 'menu-active') ? 'menu-inactive' : 'menu-active';
        });
    }
}).call(this);