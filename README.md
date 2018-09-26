# hw3
What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  
  x = x + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  

What code makes the "lawnmower" come by? How often does it come by?
  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
  
the lawnmower will come.. I don't know...

What's the point of the h variable?
Make the grass higher each loop.

What do the three numerical arguments of colorMode do?
The maximum of each arguments.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The first -10: make the grass starts point at the bottom of the canvas but higher than the ground.
The second -10: make sure the end point of the grass wont't lower than the start point.
