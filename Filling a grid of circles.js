function setup() {
  createCanvas(400, 400);
  //var hue = random(0,100);
}

// track the circle to draw next frame
let x = 25;
let y = 25;
let h = 0;

function draw() {
  colorMode(HSB);
  stroke(255);
  
  
  // draw circle with random hue
  fill(h, 60, 100);
  ellipse(x, y, 20);
  
 	
  
  if (h > 360) {
    h = 1;
  }
  
  h = h+1;
  
  
  // set up next circle
  x = x + 25;
  
  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 25;
  }
  
  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
  }
  
  
}
