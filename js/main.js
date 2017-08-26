
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
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
    // $('.certificate-links a').nivoLightbox({
    //   effect: 'slideDown',  
    //   keyboardNav: true,                            
    // });

    $('.certificate-thumbs a').nivoLightbox({
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
    // var certImg = $('#header img');
    // var title = $('#header h1');
    // var certs = $('#header ul.certificate-links li');
    // var callBtn = $('#header .call-us');
    // var arrow = $('#header .arrow-down');
    // var tl0 = new TimelineMax()
    //   .from(certImg, 0.8, {x: 100, opacity: 0, scale: 1.1, ease: Cubic.easeOut})
    //   .from(title, 0.8, {y: -100, opacity: 0, ease: Circ.easeOut})
    //   .staggerFrom(certs, 0.8, {x: -50, opacity:0, ease: Cubic.easeOut}, 0.4)
    //   .from(callBtn, 0.8, {x: -50, opacity: 0, scale: 2})
    //   .from(arrow, 0.4, {opacity: 0, scale: 1.25, y: -20}, "+=0.5")

    // var sceneHeader = new ScrollMagic.Scene({triggerHook: 1, reverse: false})
    //   .triggerElement("#header")
    //   .setTween(tl0)
    //   .addTo(controller);

      var certImgs = $('#header img');
      var title = $('#header h1');
      var headerPara = $('#header p');
      var headerKeywords = $('#header p strong');
      var callBtn = $('#header .call-us');
      var arrow = $('#header .arrow-down');
      var tl0 = new TimelineMax()
        .staggerFrom(certImgs, 1, {x: -100, y: -100, opacity: 0, scale: 1.2, rotation: -180, ease: Cubic.easeOut}, 0.4)
        .from(title, 1, {y: 50, opacity: 0, ease: Circ.easeOut})
        .from(headerPara, 0.8, {y: 50, opacity: 0, ease: Circ.easeOut}, "text")
        .staggerFrom(headerKeywords, 0.8, {opacity: 0, scale: 1.25, ease: Cubic.easeOut}, 0.4, "text")
        .fromTo(callBtn, 0.4,
          {y: -50, opacity: 0, scale: 0},
          {y: 0, opacity: 0.5, scale: 1.25})
        .to(callBtn, 0.4, {opacity: 1, scale: 1})
        .from(arrow, 0.4, {opacity: 0, scale: 1.25, y: -20}, "+=0.5")
  
      var sceneHeader = new ScrollMagic.Scene({triggerHook: 1, reverse: false})
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
    tl.staggerFrom(listItems, 0.4, {x: -120, opacity:0, ease: Cubic.easeInOut}, 0.2);

    var sceneStrength = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#intro3")
      .setTween(tl)
      .addTo(controller);

    // Animate About list
    var listItems = $('#about ul.checklist li');
    var text = $('#about p');
    var btn = $('#about .btn-custom');

    var tl2 = new TimelineMax()
      .from(text, 0.6, {opacity: 0, y: -50})
      .staggerFrom(listItems, 0.4, {y: -20, opacity: 0, ease: Cubic.easeOut}, 0.2)
      .from(btn, 0.6, {opacity: 0});

    var sceneAbout = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#about")
      .setTween(tl2)
      .addTo(controller);
    
    // Animate About part 2
    var clientList = $('#about2 ul.clientlist li');
    var firstPara = $('#about2 p.first');
    var otherPara = $('#about2 p.rest');

    var tl2_2 = new TimelineMax()
      .from(firstPara, 0.6, {opacity: 0, y: -50})
      .staggerFrom(clientList, 0.6, {x: 50, opacity: 0, ease: Cubic.easeOut}, 0.2)
      .staggerFrom(otherPara, 0.6, {opacity: 0, y: -20}, 0.6);

    var sceneAbout2 = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#about2")
      .setTween(tl2_2)
      .addTo(controller);
    
    // Commitment
    var text2 = $('#intro2 p');
    var commitmentList = $('#intro2 .checklist li');
    
    var tl2_3 = new TimelineMax()
      .from(text2, 0.6, {opacity: 0, y: -50})
      .staggerFrom(commitmentList, 0.6, {x: 100, opacity: 0, ease: Cubic.easeOut}, 0.2)
    
    var sceneIntro2 = new ScrollMagic.Scene({reverse: false})
      .triggerElement("#intro2")
      .setTween(tl2_3)
      .addTo(controller);

    // Services
    var serviceDesc = $('#services .service .desc');
    var etc = $('#services .etc');
    var icons = $('#services .icon-wrapper');
    var tl3 = new TimelineMax()
      .staggerFrom(icons, 0.4, {x: -50, y: -30, opacity:0, rotation: -180, ease: Cubic.easeInOut}, 0.2, "startTime")
      .staggerFrom(serviceDesc, 0.6, {x: -50, opacity:0, scale: 1.25, ease: Cubic.easeInOut}, 0.2, "startTime")
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