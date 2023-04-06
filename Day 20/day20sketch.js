var centerX, centerY;
var angle = 0;
var speed = 0.01;
var xSize = 30;
var xSpacing = 40;
var xColor = [200, 0, 255];

function setup() {
  createCanvas(1000, 1000);
  background(255);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255, 10);

  for (var i = 0; i < 10; i++) {
    var xRadius = xSpacing + i * xSpacing;
    var xX = centerX + xRadius * cos(angle + i);
    var xY = centerY + xRadius * sin(angle + i);

    // LETTER X
    stroke(xColor);
    strokeWeight(2);
    line(xX - xSize, xY - xSize, xX + xSize, xY + xSize);
    line(xX - xSize, xY + xSize, xX + xSize, xY - xSize);
  }

  angle += speed;
}
