
function main () {
	// var canvas = document.getElementById("canvas");
	// var context = canvas.getContext("2d");

	// Make an instance of two and place it on the page.
	var elem = document.getElementById('canvas');
	var params = { width: 285, height: 200 };
	var two = new Two(params).appendTo(elem);

	// two has convenience methods to create shapes.
	var circle = two.makeCircle(72, 100, 50);
	var rect = two.makeRectangle(213, 100, 100, 100);

	// The object returned has many stylable properties:
	circle.fill = '#FF8000';
	circle.stroke = 'orangered'; // Accepts all valid css color
	circle.linewidth = 5;

	rect.fill = 'rgb(0, 200, 255)';
	rect.opacity = 0.75;
	rect.noStroke();

	two.update();

	var group = two.makeGroup(circle, rect);

	group.translation.set(two.width, two.height);
	group.rotation = Math.PI;
	group.scale = (0.75);

	group.linewidth = 7;

	two.update()

	// context.fillStyle = "yellow";
	// context.beginPath();
	// context.arc(95, 85, 40, 0, 2*Math.PI);
	// context.closePath();
	// context.fill();
	// context.lineWidth = 2;
	// context.stroke();
	// context.fillStyle = "black";

	// // Draw the left eye
	// context.beginPath();
	// context.arc(75, 75, 5, 0, 2*Math.PI);
	// context.closePath();
	// context.fill();

	// // Draw the right eye
	// context.beginPath();
	// context.arc(114, 75, 5, 0, 2*Math.PI);
	// context.closePath();
	// context.fill();

	// // Draw the mouth
	// context.beginPath();
	// context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
	// context.closePath();
	// context.fill();

	// // Write "Hello, World!"
	// context.font = "30px Garamond";
	// context.fillText("Hello, World!",15,175);


}

$(document).ready(main);
