var didScroll = true;

$(window).scroll(function() {
  didScroll = true;
});

setInterval(function() {
  var scrollTop = $(window).scrollTop();
  var windowHeight =  $(window).height();
  if(didScroll && scrollTop > windowHeight) {
    didScroll = false;
    $(".top-button").fadeIn("slow");
  } else if(didScroll && scrollTop < windowHeight/3) {
    $(".top-button").fadeOut("slow");
  }
}, 400);

$(".top-button").click(function() {
  $("html, body").animate({scrollTop: 0}, 1000);
});

$("html").easeScroll({
  frameRate: 40,
  animationTime: 1000,
  stepSize: 57,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 30,
  accelerationMax: 2,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true
});


$(".turn").click(function () {
  //  console.log($(this));
  var all = $("i");
  var current = $(this).find("i");
  var alreadyRotated = current.hasClass("rotate-down");
  all.removeClass("rotate-down");

  if(!alreadyRotated) {
    current.toggleClass("rotate-down");
  }
});

$('.carousel').carousel({
  interval: 3300,
  pause: false
});

var mq = window.matchMedia( "(min-width: 0px) and (max-width: 768px)" );
if(mq.matches) {

  $('[data-fancybox]').fancybox({
    margin : [44,0,22,0],
    thumbs : {
      autoStart : true,
      axis      : 'x'
    },
    buttons: [
          "zoom",
          //"share",
          //"slideShow",
          "fullScreen",
          //"download",
          "thumbs",
          "close"
      ]
  });
}
if(!mq.matches) {
  $("[data-fancybox]").fancybox({
    thumbs : {
      autoStart : true
    },
    padding: 0,

    buttons: [
          "zoom",
          //"share",
          "slideShow",
          "fullScreen",
          //"download",
          "thumbs",
          "close"
      ]
  });
}
