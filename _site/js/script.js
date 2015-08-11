$(document).ready(function() {
    $('.page-header.blog').hover(function(eventData) {
        $('.blog-dropdown').fadeIn();
    }, function(eventData) {
        $('.blog-dropdown').fadeOut();
    });
});