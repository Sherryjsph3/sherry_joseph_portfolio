
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



