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
        homepage()
    }


});

function aboutMe() {
    // body...
}

function blog() {
    // Code pertaining to the sidebar opening/closing
    $('.button.sidebar-open').click(function() {
        $('.sidebar.blog').stop(true);
        $('.wrapper.blog').stop(true);
        $('.button.sidebar-open').stop(true);
        $('.sidebar.blog').animate({ left: 0 }, 1000);
        $('.wrapper.blog').animate({ 'marginLeft': 'calc(55%)' }, 1000); // 435 === +=100
        $('.button.sidebar-open').fadeOut(500);
    });

    $('.button.sidebar-close').click(function() {
        $('.sidebar.blog').stop(true);
        $('.wrapper.blog').stop(true);
        $('.button.sidebar-open').stop(true);
        $('.sidebar.blog').animate({ left: -200 }, 1000);
        $('.wrapper.blog').animate({ 'marginLeft': 'calc(50%)' }, 1000); // 335 === -=100
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

function homepage() {

    // $('.ion-close.homepage').click(function() {
    //     skipIntro();
    // });
    // homepageIntro();
    // tempHomepageIntro();
    splashMessage();
    // $('.homepage.overlay').delay(3000).fadeOut(1000);
    var imgUrls = ['https://farm7.staticflickr.com/6093/7022460561_8b55cd68bf_h.jpg',
        'https://farm7.staticflickr.com/6091/7022465317_108d866745_h.jpg'];
    var imageIndex = 0;
    var backgroundElem = $('body.homepage').css({'background-image': 'url("' + imgUrls[imageIndex++] + '")'});
    setInterval(function() {
        backgroundElem.css({'background-image': 'url("' + imgUrls[(imageIndex++) % imgUrls.length] + '")'});
    }, 9000);
}

function skipIntro() {

}

function tempHomepageIntro() {
    $('.homepage.opening-message').typed({
        strings: ['Hello!', 'My name is John', 'Welcome to my personal website! :)'],
        backDelay: 1500,
        startDelay: 500,
        showCursor: false,
        callback: function() {
            $('.homepage.overlay').fadeOut(3000, function() {
                splashMessage();
            });
        }
    });
}

function homepageIntro() {
    $('.homepage.opening-message').typed({
        strings: ['Hello!', 
            'My name is John ^1000 <br> and this is me',
            '^2000 at least I was the guy <br> on top of the A.',
            'Welcome! <br> ^1000 I do hope you enjoy <br> viewing my website :)'],
        backDelay: 1500,
        startDelay: 500,
        showCursor: false,
        callback: function() {
            $('.homepage.overlay').fadeOut(3000, function() {
                splashMessage();
            });
        },
        onStringTyped: function() {
            if ($('.homepage.opening-message').text().indexOf('My name is John') > -1) {
                $('.homepage.me').delay(1000).show().animate({ left: '50%' }, 1000, 'easeOutExpo', function() {
                    $(this).delay(1500).animate({ left: '-52%' }, 1000, 'easeInExpo', function() {
                        console.log($('.homepage.opening-message'));
                    });
                });
            }
        }
    });
}

function splashMessage() {
    $('.homepage.splash-message').typed({
        strings: ['John Louie ^1000 <br> Student. ^900 Teacher. ^900 Developer.'],
        typeSpeed: 29,
        startDelay: 500,
        showCursor: false,
        callback: function() {
            // var message = $('<p/>').text('Thank you for visiting! The website is currently ' + 
            //         'undergoing a major face lift... I hope you visit again soon to see it complete!');
            // $('.homepage.splash-message').append(message.hide()
            //     .addClass('temp-message').delay(2000).show(1500, 'swing', function() { message.show(); }));
        }
    });
}

function music() {
    // body...
}

function photos() {
    $('.album-cover').hover(function(eventData) {
        $(this).children('.album.overlay').stop();
        $(this).children('.album-description').stop();
        $(this).children('.album.overlay').fadeIn('slow');
        $(this).children('.album-description').fadeIn('slow');
    }, function(eventData) {
        $(this).children('.album.overlay').stop();
        $(this).children('.album-description').stop();
        $(this).children('.album.overlay').fadeOut('slow');
        $(this).children('.album-description').fadeOut('slow');
    });
}

function projects() {
    // body...
}

function tutoring() {
    // body...
}
