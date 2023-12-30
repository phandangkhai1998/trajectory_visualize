let canvas_width = 800;
let canvas_height = 500;
let t = 0;
let vx = 100, vy = 100;

function setup() {
	createCanvas(canvas_width, canvas_height, WEBGL);
	background(0, 0, 0);
}

function draw() {
	background(0, 0, 0);

	// t += 0.01;
	// circle(x,y,20);
	  // Define the position coordinates
	let x = vx*t;
	let y = vy*t;
	let z = 0;

	t += 0.01;
	
	  // Move the origin to the specified location
	translate(x, y, z);
	// fill(255, 0, 0);
	// noStroke();
	  // Draw a sphere at the new origin
	sphere(50); // Sphere with a radius of 50
}
