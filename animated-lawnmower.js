function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(240)
}

var x = 0;
var h = 10;
var m = 0;
var recX = -1

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(10, 40), height-10-random(h));
  
  x = x + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  if (m > 0) {
    noStroke();
    fill(255);
    rect(recX, -1, 100, 200);
    h = 10;
    recX = recX + 2;
  }
  
  if (recX > 300){
  	recX = -1;
    m = 0
  }
  
  
  
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}

function mousePressed() {
  if (m === 0) {
    m = 1;
  } 
}
