# hw3
## What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  
  x = x + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  

## What code makes the "lawnmower" come by? How often does it come by?
  if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
  
the lawnmower will come.. I don't know...

## What's the point of the h variable?
Make the grass higher each loop.

## What do the three numerical arguments of colorMode do?
The maximum of each arguments.

## What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The first -10: make the grass starts point at the bottom of the canvas but higher than the ground.
The second -10: make sure the end point of the grass wont't lower than the start point.

## If an array has 5 elements in it, what are the valid index values for the array? (Hint: what's always the first index value?)
0~14

## What is the difference between a for loop and a while loop?
for loops through the properties of an object
while loops through a block of code while a specified condition is true

## Use Google or your favorite search website to figure out what the three parts of a for loop are called in JavaScript.
properties

## How does code refer to the number of elements (aka "entries") in an array? (Hint: it shows up in the code you modified!)
arrayName[index]

## What's the point of an object?
Object collects the properties

## What's an example of a range you might use for the map function?
map(mouseX, 0, 400, 0, 255): map mouseX to color.

## What line of code would give me a random year in the last century?
random(1900,1999)
