$(document).ready(function() {
  $('.categories-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true,
    initialSlide: 1,
    autoplay: 700,
    cssEase: 'ease',
  });
  $('.selected-goods__main-screen').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true,
    speed: 400,
    draggable: false,
    pauseOnHover: false,
  });
  $('.news__blocks__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 700,
    cssEase: 'ease',
  });
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
  })
});