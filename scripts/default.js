// Page loader
$(window).load(function () {
    $("#loader").fadeOut("slow");
    scrollIntervalID = setInterval(timedEvents, 10);
});

// Slow scroll to location
$(document).ready(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('body').animate({
                    'scrollTop': target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Timer prevents 
function timedEvents() {
    fixedHeader();
    fadeOnScroll();
    showTitleInNav();
}

// Scroll to fixed nav
function fixedHeader() {
    var scrolled = $(document).scrollTop();
    if (scrolled >= $('#page_title').outerHeight()) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
}

// Show page link in nav bar once page title disappears
function showTitleInNav() {
    var distance = $('#main').offset().top;
    if (($(window).scrollTop() + $('nav').outerHeight()) > distance) {
        $('nav').addClass('nav_bg');
    } else {
        $('nav').removeClass('nav_bg');
    }
}

// Fade out elements as page is scrolled
function fadeOnScroll() {
    var scrollVar = $(this).scrollTop();
    $('#scroll_link').css({
        'opacity': 1 - (scrollVar / 350)
    });
    $('#page_title').css({
        'opacity': 1 - (scrollVar / 50)
    });
}
