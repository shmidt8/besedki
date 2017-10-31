$(document).ready(function () {
    $('#cssmenu li.has-sub > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
 
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');








    $('.slider-min').slick({
      speed: 300,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
  ]
});







$('.slider-reviews').slick({
      speed: 300,
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
  ]
});


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    focusOnSelect: true,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      }
    },
     {
      breakpoint: 1200,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
      slidesToShow: 5,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1
      }
    }
  ]
  });


  $('.slider-news').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true
  });


 $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });


$("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset();
    $('body,html').animate({scrollTop: top}, 1500);

  });


  $('#menu-btn').click(function(){    
      $('.menu').slideToggle(700);  
      if ($(this).hasClass('not-active')) {
        $(this).addClass('is-active').removeClass('not-active');
      }else{
        setTimeout(function(){
          $('.is-active').addClass('not-active').removeClass('is-active')
        },600)      
      }   
    });




$("#ex2").slider({});




});