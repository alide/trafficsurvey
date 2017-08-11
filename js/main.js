
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    // $(window).bind('scroll', function() {
    //     var navHeight = $(window).height() - 600;
    //     if ($(window).scrollTop() > navHeight) {
    //         $('.navbar-default').addClass('on');
    //     } else {
    //         $('.navbar-default').removeClass('on');
    //     }
    // });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	

    // Nivo Lightbox 
    $('.certificate-links a').nivoLightbox({
      effect: 'slideDown',  
      keyboardNav: true,                            
    });

}());


}

main();

$(function(){ 
	// Animation

    // Init
    var controller = new ScrollMagic.Controller();

    // Animate header
    var certImg = $('#header img');
    var title = $('#header h1');
    var certs = $('#header ul.certificate-links li');
    var callBtn = $('#header .call-us');
    var arrow = $('#header .arrow-down');
    var tl0 = new TimelineMax()
      .from(certImg, 0.8, {x: 350, y: -50, opacity: 0, rotation: 30, ease: Power1.easeInOut})
      .from(title, 0.6, {y: -30, opacity: 0, ease: Cubic.easeInOut})
      .staggerFrom(certs, 0.6, {x: -150, opacity:0, ease: Cubic.easeInOut}, 0.3)
      .from(callBtn, 0.4, {opacity: 0, scale: 0})
      .from(arrow, 0.4, {opacity: 0, scale: 1.25, y: -20})

    var sceneHeader = new ScrollMagic.Scene({triggerHook: 0, reverse: false})
      .triggerElement("#header")
      .setTween(tl0)
      .addTo(controller);
    
    // Animate target
    var sceneTarget = new ScrollMagic.Scene({reverse: false})
      .triggerElement('#target')
      .setClassToggle('#target', 'focusing')
      .addTo(controller);
    
    // Animate Intro3 list
    var listItems = $('#intro3 ul.checklist li');
    var tl = new TimelineMax();
    tl.staggerFrom(listItems, 0.4, {x: -150, opacity:0, ease: Cubic.easeInOut}, 0.2);

    var sceneStrength = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#intro3")
      .setTween(tl)
      .addTo(controller);

    // Animate About list
    var listItems = $('#about ul.checklist li');
    var text = $('#about p');
    var tl2 = new TimelineMax()
      .from(text, 0.6, {opacity: 0, y: -50})
      .staggerFrom(listItems, 0.4, {x: 300, opacity:0, ease: Cubic.easeOut}, 0.4);

    var sceneAbout = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#about")
      .setTween(tl2)
      .addTo(controller);

    // Services
    var serviceDesc = $('#services .service .desc');
    var etc = $('#services .etc');
    var icons = $('#services .icon-wrapper');
    var tl3 = new TimelineMax()
      .staggerFrom(icons, 0.4, {x: -50, y: -30, opacity:0, rotation: -180, ease: Cubic.easeInOut}, 0.2)
      .staggerFrom(serviceDesc, 0.6, {x: -100, opacity:0, scale: 1.25, ease: Cubic.easeInOut}, 0.2)
      .from(etc, 0.6, {y: -20, opacity:0, ease: Cubic.easeInOut})

    var sceneServices = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#services")
      .setTween(tl3)
      .addTo(controller);


    // Animate Contact section
    var markers = $('#contact .fa');
    var tl4 = new TimelineMax()
      .staggerFromTo(markers, 0.3,
        {y: -20, opacity: 0, scale: 1.75},
        {y: 0, opacity: 1, scale: 1, color: "#99ff9e"},
        0.3, "+=0.1");

    var sceneContact = new ScrollMagic.Scene()
      .triggerElement('#contact')
      .setTween(tl4)
      .addTo(controller);
});