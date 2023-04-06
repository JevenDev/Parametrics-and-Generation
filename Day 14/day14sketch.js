var angle = 0;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  angleMode(DEGREES);
  noFill();
  stroke(255);

  // frameRate(30);
  // createLoop({duration:5, gif:true})
}

function draw() {
  translate(width/2, height/2);
  rotate(angle);

  var size = 400;
  var x = -size/2;
  var y = -size/2;
  var spacing = 20;

  beginShape();
  vertex(x, y);
  vertex(x+size/2-spacing, y);
  vertex(x+size/2-spacing, y+spacing*10);
  vertex(x+spacing, y+spacing*10);
  vertex(x+spacing, y+size/2);
  vertex(x+size/2, y+size/2);
  endShape(CLOSE);

  angle += 0.7;
}