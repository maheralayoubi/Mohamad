//----START--------ANIMATE ON SCROLL----------------//
wow = new WOW({animateClass: 'animated',
              offset: 100});
wow.init();
//----END----------ANIMATE ON SCROLL------------//
//----START----Smooth Scroll TO DIV -------------//

$('.menu ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    },1000);
});
//----END---Smooth Scroll TO DIV ---------------//
//----START---- Counter -------------//
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//----END---- Counter -------------//



