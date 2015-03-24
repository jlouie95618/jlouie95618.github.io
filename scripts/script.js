// Javascript/jQuery document to accompany index.html

var num_messages = 3;
var first_message_adj = 500;
var pre_delay = 2000;
var fade_out = 1000;
var nav_car_delay = num_messages*(pre_delay + fade_out);

var main = function() {
	$(function(){
    	$("nav").hide()
       	$("#carousel").hide()
		$("#typing-1").typed({
			strings: ["Hello, my name is John"],
			// typing speed
			typeSpeed: 19,
			// show cursor
			showCursor: false,
	        // call when done callback function
	        callback: function() {
	        	$("#typing-1").delay(pre_delay - first_message_adj).fadeOut(fade_out)
	        },
		});

		$("#typing-2").typed({
			strings: ["Welcome to my personal website!"],
			// typing speed
			typeSpeed: 19,
			// time before typing starts
			startDelay: 2 * pre_delay,
			// show cursor
			showCursor: false,
	        // call when done callback function
	        callback: function() {
	        	$("#typing-2").delay(pre_delay).fadeOut(fade_out)
	        },
		});

		$("#typing-3").typed({
			strings: ["Here is a brief slideshow of some of my photos!"],
			// typing speed
			typeSpeed: 19,
			// time before typing starts
			startDelay:  nav_car_delay,
			// show cursor
			showCursor: false,
	        // call when done callback function
	        callback: function() {
	        	$("#typing-3").delay(pre_delay).fadeOut(fade_out)
	        	$("#cover").delay(nav_car_delay + nav_car_delay / 2).fadeOut(pre_delay + 2 * fade_out)
	        },
		});

    	$("nav").delay(nav_car_delay + nav_car_delay / 2).fadeIn(pre_delay + 2 * fade_out)

    	$("#carousel").delay(nav_car_delay + nav_car_delay / 2).fadeIn(pre_delay + 2 * fade_out)

   //  	$("div").filter(column).click(function(event) {
   //  	var target = $(event.target);
   //  	if (!target.is("div" + column + ".blue")) {
   //  		$(this).addClass("blue");
   //  		counter++;
			// if (counter == 7) {
			// 	switchSmallSquare(true);
			// }
	  //   	events.push(target);
   //  	};
	  //   if (events.length == 7) {
	  //   	triggerReverse(events);
			// switchSmallSquare(false);
	  //   }
   //  });

	});
}

$(document).ready(main);

