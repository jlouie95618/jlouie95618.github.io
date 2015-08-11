var _MILLISEC_IN_SEC = 1000;
var _NUM_SEC = 1;

$(document).ready(function() {

    console.log(window.location.pathname);
    console.log(window.location.href);

    if ((window.location.pathname).indexOf('/about-me/') > -1) {

    } else if ((window.location.pathname).indexOf('/blog/') > -1) {
        blog();
    } else if ((window.location.pathname).indexOf('/code/') > -1) {

    } else if ((window.location.pathname).indexOf('/music/') > -1) {

    } else if ((window.location.pathname).indexOf('/photos/') > -1) {
        photos();
    } else if ((window.location.pathname).indexOf('/projects/') > -1) {

    } else if ((window.location.pathname).indexOf('/tutoring/') > -1) {

    } else {

    }


});

function aboutMe() {
    // body...
}

function blog() {
    $('.button.sidebar-close.hvr-grow').hover(function(eventData) {
        $('.menu-horizontal-bar.top').stop();
        $('.menu-horizontal-bar.bottom').stop();
        $('.menu-horizontal-bar.top').addClass('is-active');
        $('.menu-horizontal-bar.bottom').addClass('is-active');
    }, function(eventData) {
        $('.menu-horizontal-bar.top').stop();
        $('.menu-horizontal-bar.bottom').stop();
        $('.menu-horizontal-bar.top').removeClass('is-active');
        $('.menu-horizontal-bar.bottom').removeClass('is-active');
    });

    $('.button.sidebar-open').click(function() {
        $('.sidebar.blog').stop(true);
        $('.wrapper.blog').stop(true);
        $('.button.sidebar-open').stop(true);
        $('.sidebar.blog').animate({ left: 0 }, 1000);
        $('.wrapper.blog').animate({ 'marginLeft': '435' }, 1000); // 435 === +=100
        $('.button.sidebar-open').fadeOut(500);
    });

    $('.button.sidebar-close').click(function() {
        $('.sidebar.blog').stop(true);
        $('.wrapper.blog').stop(true);
        $('.button.sidebar-open').stop(true);
        $('.sidebar.blog').animate({ left: -200 }, 1000);
        $('.wrapper.blog').animate({ 'marginLeft': '335' }, 1000); // 335 === -=100
        $('.button.sidebar-open').delay(1000).fadeIn('fast');
        sidebarToggle = true;
    });

    // Code pertaining to the in blog page dropdown...
    $('.blog-archive').hide();
    $('.blog-topics').hide();
    $('.blog-about').hide();
    $('.page-header.blog').hover(function(eventData) {
        $('.blog-archive').stop();
        $('.blog-topics').stop();
        $('.blog-about').stop();
        $('.blog-archive').fadeIn(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.blog-topics').fadeIn(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.blog-about').fadeIn(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.stylized-l-under-title').css({'-webkit-transform' : 'translate(0px, -10px)'});
    }, function(eventData) {
        $('.blog-archive').stop();
        $('.blog-topics').stop();
        $('.blog-about').stop();
        $('.blog-archive').fadeOut(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.blog-topics').fadeOut(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.blog-about').fadeOut(_MILLISEC_IN_SEC * _NUM_SEC);
        $('.stylized-l-under-title').css({'-webkit-transform' : 'translate(0px, 10px)'});
    });
}

function code() {
    // body...
}

function home() {
    // body...
}

function music() {
    // body...
}

function photos() {
    console.log('sanity check');
    $('.album-cover').hover(function(eventData) {
        console.log('sanity check 3');
        // $('img.album').stop();
        $(this).children('img.album').css('opacity', '0.5');
        $(this).children('.album-description').css('opacity', '1');
    }, function(eventData) {
        // $('img.album').stop();
        $(this).children('img.album').css('opacity', '1');
        $(this).children('.album-description').css('opacity', '0');
    });
}

function projects() {
    // body...
}

function tutoring() {
    // body...
}
