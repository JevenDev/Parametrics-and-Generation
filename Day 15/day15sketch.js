function setup() {
  createCanvas(1000, 1000);
  noStroke();

  var c1 = color(255, 216, 184);
  var c2 = color(255, 133, 82);

  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  var xSize = 400;
  var xSpacing = 100;
  var xColor = color(255);
  var xWeight = 30;

  stroke(xColor);
  strokeWeight(xWeight);
  for (var i = -xSize / 1; i < xSize / 1; i += xSpacing) {
    line(width / 2 + i, height / 2 - xSize / 2, width / 2 + i + xSpacing, height / 2 + xSize / 2);
    line(width / 2 + i, height / 2 + xSize / 2, width / 2 + i + xSpacing, height / 2 - xSize / 2);
  }
}