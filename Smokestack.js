var x = 210;
var y = 290;
var r = 0;
var x2 = 180;
var y2 = 220;
var x3 = 200;
var y3 = 200;
var x4 = 200;
var y4 = 200;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(185, height, 50, -100);
  rect(120, height, 50, -80);

  // darker as it gets closer to 0
  push();
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, 20, 40, 40);
  pop();
	
	push();
  fill(y2);
  translate(x2, y2);
  rotate(r);
  rect(-20, 30, 30, 30);
  pop();
  
	push();
  fill(y3);
  translate(x3, y3);
  rotate(r);
  rect(-60, -20, 60, 60);
  pop();
	
	push();
  fill(255);
  translate(x4, y4);
  rotate(r);
  rect(0, -20, 60, 60);
  pop();
	
  // up 3 pixels
  y -= 2;
	y2 -= 6;
	y3 -= 1;
	y4 -= 1;
	
	x4 -= 2;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
	
	if (y2 < -60) {
    y2 = 220;
  }
	
	if (y3 < -10) {
    y3 = 200;
  }
	
	
	if (x4 < -100) {
    y4 = 200;
		x4 = 200;
  }
}
