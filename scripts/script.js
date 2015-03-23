// Javascript/jQuery document to accompany index.html

var main = function() {
	$(function(){
    	$("nav").hide()
		$(".typing").typed({
			strings: ["Hello, my name is John"],
			// typing speed
			typeSpeed: 19,
			// show cursor
			showCursor: false,
			// character for cursor
	        callback: function() {$(".typing").delay(1500).fadeOut(1000)},
		});

		$(".typing-2").typed({
			strings: ["Welcome to my personal website!"],
			// typing speed
			typeSpeed: 19,
			// time before typing starts
			startDelay: 5000,
			// show cursor
			showCursor: false,
			// character for cursor
	        callback: function() {
	        	$(".typing-2").delay(2000).fadeOut(1000)
	        	$(".cover").fadeOut(3000)
	        	$("nav").fadeIn(10000)
	        },
		});

	});
}

$(document).ready(main);

