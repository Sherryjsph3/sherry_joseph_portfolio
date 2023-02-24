
// nav bar script
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 0) {
            $('.navbar-folio').addClass("sticky")
        }else {
            $('.navbar-folio').removeClass("sticky")
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar-folio script
    $('.menu-btn').click(function(){
        $('.navbar-folio .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
   
});


//PROJECTS SECTION

var width = 0;
var widthTwo = 0;


$('.proj-content-flexit .workBx-landing').each(function() {
    width += $(this).outerWidth( true );
});

$(".proj-content-flexit").append($('.workBx-landing').clone());

  function scrollPattern(w) {
      function phase1() {
          var start = $('.proj-content-flexit').first(),
              curMargin = start.css('margin-left').replace("px", ""),
              animSpeed = (w*40) - (Math.abs(curMargin)*40);

          start.animate({'margin-left' : '-' + w + 'px'}, animSpeed, 'linear', phase2);
      }
      function phase2() {
          $('.proj-content-flexit').first().css({'margin-left' : '0px'});
          phase1();
      }
      $('.workBx-landing').hover(function() {
          $('.proj-content-flexit').stop();
      }, function() {
          phase1();
      });
      $('.workBx-landing').hover(function() {
          $('.proj-content-flexit').stop();
      }, function() {
          phase1();
      });
      $('.workBx-landing').on('touchstart', function() {
          $('#proj-content-flexit').stop();
      });
      $('.workBx-landing').on('touchend', function() {
          phase1();
      });
      phase1();
  }

scrollPattern(width);


$('.proj-content .workBx').each(function() {
    widthTwo += $(this).outerWidth( true );
});

$(".proj-content").append($('.workBx').clone());


function scrollPatternTwo(w) {
    function phase1() {
        var start = $('.proj-content').first(),
            curMargin = start.css('margin-left').replace("px", ""),
            animSpeed = (w*40) - (Math.abs(curMargin)*40);

        start.animate({'margin-left' : '-' + w + 'px'}, animSpeed, 'linear', phase2);
    }
    function phase2() {
        $('.proj-content').first().css({'margin-left' : '0px'});
        phase1();
    }
    $('.workBx').hover(function() {
        $('.proj-content').stop();
    }, function() {
        phase1();
    });
    $('.workBx').hover(function() {
        $('.proj-content').stop();
    }, function() {
        phase1();
    });
    $('.workBx').on('touchstart', function() {
        $('#proj-content').stop();
    });
    $('.workBx').on('touchend', function() {
        phase1();
    });
    phase1();
}

scrollPatternTwo(widthTwo);

