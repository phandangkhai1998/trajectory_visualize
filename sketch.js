let canvas_width = 800;
let canvas_height = 500;
let coordinatesData; // Initialize to null
let index = 0; // Index to track the current position

function preload() {
	coordinatesData = loadJSON("coordinates.json");
}

function setup() {
	createCanvas(canvas_width, canvas_height);
	background(0, 0, 0);
	// particleTrajectory = loadJSON('coordinates.json');
}

function draw() {
	background(0, 0, 0);
	if (coordinatesData && index < coordinatesData[0].length) {
		let x = coordinatesData[0][index];
		let y = coordinatesData[1][index];
		let z = coordinatesData[2][index];
	
		// Drawing the object using x, y, and optionally z
		circle(x * 10 + 300, y * 10+ 300, 10);
	
		index++; // Move to the next coordinate
	  }
	
	  if (index >= coordinatesData[0].length) {
		index = 0; // Reset the index to loop the animation
	}
}
