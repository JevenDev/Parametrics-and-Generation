var trail = 0;
const spacing = 2.5;

function setup() {
  createCanvas(1000, 1000);
  textSize(60);
}

function draw() {
  background(150, 50);
  stroke(0, 100);
  noFill();
  translate(width / 2, height / 2);

  for (var i = 0; i < 10; i++) {
    var radius = i * 10 + 50;
    var x = radius * cos(trail + i) * spacing;
    var y = radius * sin(trail + i) * spacing;
    var alphaVal = map(i, 0, 10, 255, 0);
    fill(0, alpha(alphaVal));
    text("J", x, y);
  }

  trail += 0.05;
}