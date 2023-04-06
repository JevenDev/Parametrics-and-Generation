var angle = 0;

function setup() {
  createCanvas(1000, 1000);
  background(35);
  // frameRate(30);
  // createLoop({duration:3, gif:true})
}

function draw() {
  translate(width/2, height/2);
  rotate(angle);
  noFill();
  strokeWeight(10);
  stroke(random(255), random(255), random(255));
  ellipse(0, 0, 500, 350);
 
  angle += 0.05;
}