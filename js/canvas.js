// Variables!
var color ="red";
var radius = 15;
var x = 50;
var y = 150;

//set up canvas size to be 75% of the width and height of the screen
var canvasWidth = (window.innerWidth) * .75;
var canvasHeight = (window.innerHeight) * .75;
document.querySelector('canvas').width = canvasWidth;
document.querySelector('canvas').height = canvasHeight;
//You will want to add more

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var clr = document.querySelector("#clr")
AllowDrawing = true;

//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e) {
	console.log("window loaded");
	ctx.fillStyle = color;
	draw();
})
//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
	//console.log(e.x);
	//console.log(e.y);
	if (AllowDrawing){
	x = e.x;
	y = e.y;
	draw();
}
})
//Add a listener for the touch move
window.addEventListener('touchstart', function(e) {
	window.addEventListener('touchmove', function(e) {
		x = e.touches[0].pageX;
		y = e.touches[0].pageY - 40;
		draw();
	})
})
//Add a listener for the color picker
clr.addEventListener("input", function(e){
	console.log("Color Picker");
	console.log(this);
	ctx.fillStyle = clr.value;
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log("In Keydown");
	console.log(e.keyCode);

	if(e.keyCode == 66){
		console.log("I hit B for blue");
		ctx.fillStyle = "#0000FF";
		draw();
	}
	else if(e.keyCode == 82){
		console.log("I hit R for red");
		ctx.fillStyle = "#FF0000";
		draw();
	}

	else if(e.keyCode == 71){
		console.log("I hit G for green");
		ctx.fillStyle = "#00FF00";
		draw();
	}
	else if(e.keyCode == 89){
		console.log("I hit Y for yellow");
		ctx.fillStyle = "#FFFF00";
		draw();
	}
	else if(e.keyCode == 40){
		console.log("I hit down arrow to place the pen");
		AllowDrawing = true;
		draw();
	}
	else if(e.keyCode == 38){
		console.log("I hit up arrow to lift the pen");
		AllowDrawing = false;
	}
	else if(e.keyCode == 32){
		console.log("I hit space to clear the canvas");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
})


// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!");
	ctx.beginPath();
	ctx.arc(x,y,10,0,2*Math.PI);
	ctx.fill();	
}