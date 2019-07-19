/* Start Navbar */

var nav = document.querySelector('nav');
function navScroll () {
    'use strict';
    if (pageYOffset >= 70) {
        nav.setAttribute('style', 'background:#20262f;');
    } 
    else {
        nav.setAttribute('style', 'background:none;');
    }
} addEventListener('scroll', navScroll);

$(document).ready(function () {
    $('.bars').click(function() {
        $('.sm-ul').slideToggle();
    });
})

$(function () {
    $('a').click(function () {
        $('.sm-ul').delay(500).slideUp();
    });
});

/* End Navbar */

/* Start Scrolling to top */
$(document).ready(function () {
    $('.scrolltop').click(function() {
        $('html, body').animate({
            scrollTop : $('#top').offset().top
        }, 1000);
    });
});
/* End Scrolling To top */

// Start Features 

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.feat').offset().top - 200) {
            $('.feat').animate({
                opacity : 1,
            }, 400);
        }
    })
});


$(function () {
    $('.slider button').click(function () {
        $('html, body').animate({
            scrollTop : $('.feat').offset().top - 200
        }, 400)
    });
});



// End Features 


/* Start Services */
var services  = document.querySelector(".services");
var servHead1 = document.querySelector('.serv-head1');
var servHead2 = document.querySelector('.serv-head2');
var servHead3 = document.querySelector('.serv-head3');

window.addEventListener('scroll', function () {

    if (pageYOffset >= services.offsetTop - 250) {
        services.setAttribute('style', 'opacity:1;');
        servHead1.setAttribute('style', 'opacity:1;transform:translateX(0)');
        servHead2.setAttribute('style', 'opacity:1;transform:translateY(0)');
        servHead3.setAttribute('style', 'opacity:1;transform:translateX(0)');
    }
});

/* End Services */