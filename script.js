// Standard jQuery:

// $(document).ready(function(){
//     $("div").slideDown("slow")
// });

// $(document).ready(function() {
//     $('div').mouseenter( function() {
//         $('div').fadeTo("fast", 1);
//     });
    
//     $('div').mouseleave( function() {
//         $('div').fadeTo('fast', 0.5);
//     });
    
// });

// Structure of jQuery functions:

// function(input1, input2, etc) {
//     Do a thing
//     Do another thing
//     Do yet another thing!
// }

var main = function() {
     $('.tutoring').fadeOut('slow');
}

$(document).ready(main);