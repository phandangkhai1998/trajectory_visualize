let w = 800;
let h = 500;
let t = 0;
let vx = 100, vy = 100;

function setup() {
	createCanvas(w, h);
	background(0, 0, 0);
}

function draw() {
	background(0, 0, 0);
	let x = vx*t + 50;
	let y = vy*t + 50;
	t += 0.01;
	circle(x,y,20);
}
