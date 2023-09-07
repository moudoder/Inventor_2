$(document).ready(function () {


  $('.news-slider').slick({
  	infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
  })

  if ($(window).width() > 767) {
    $('.news .slick-dots').wrap('<div class="dots-wrapper" />'); 

    $('.news .dots-wrapper').prepend('<div class="news-prev news-arrow" href="#"><img src="img/slider-arrow.svg" alt=""></div>');
    $('.news .dots-wrapper').append('<div class="news-next news-arrow" href="#"><img src="img/slider-arrow.svg" alt=""></div>');

    $('.news-prev').on('click', function() {
    	$('.news-slider').slick('slickPrev');
    	return false;
    })
    $('.news-next').on('click', function() {
    	$('.news-slider').slick('slickNext');
    	return false;
    })
  }
  if ($(window).width() < 767) {
    $('.invention-row').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      dots: true,
      prevArrow: $('.invention-arrows .arrow-prev'),
      nextArrow: $('.invention-arrows .arrow-next'),
    })

    $('span.gratitude-block').remove();

    $('.gratitude-letters .row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      dots: true,
      prevArrow: $('.gratitude-letters .gratitude-prev'),
      nextArrow: $('.gratitude-letters .gratitude-next'),
    })

    $('.gratitude-patents .row').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      dots: true,
      prevArrow: $('.gratitude-patents .gratitude-prev'),
      nextArrow: $('.gratitude-patents .gratitude-next'),
    })
  }

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  $('.header-burger').on('click', function() {
    $('.modal-menu').fadeIn();
    return false;
  })

  $('.modal-menu__close').on('click', function() {
    $('.modal-menu').fadeOut();
    return false;
  })
})