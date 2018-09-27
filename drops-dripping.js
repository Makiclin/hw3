var x = 230;
var y = [200, 250, 240, 480, 310, 300, 308, 298, 294, 290, 287, 220, 280, 310, 320];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  for (var i = 0; i < y.length; i = i + 1) {
    // draw drip
    ellipse(x, y[i], 10);

    // down 3 pixels each frame
    y[i] = y[i] + 3;

    // if invisible for a full “height” amount, reset
    if (y[i] > height*2) {
      y[i] = 220;
    }
  }
}
