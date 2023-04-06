var angle = 0;
var xoff, yoff;

function setup() {
  createCanvas(1000, 1000);
  // frameRate(30);
  // createLoop({duration:3, gif:true})
}

function draw() {
  background(35);
  translate(width/2, height/2);

  var outerRadius = 200;
  var innerRadius = 100;
  xoff = cos(angle) * 0.5 + 0.5;
  yoff = sin(angle) * 0.5 + 0.5;
  var noiseFactor = 0.3

  // OUTER CIRCLE
  beginShape();
  for (let angle = 0; angle <= 360; angle += 5) {
    var x = outerRadius * cos(radians(angle));
    var y = outerRadius * sin(radians(angle));
    var n = noise(xoff + cos(radians(angle)) * noiseFactor, 
                  yoff + sin(radians(angle)) * noiseFactor);
    var r = map(n, 0, 1, 50, 250);
    fill(r, 0, 0);
    stroke(0);
    vertex(x + x * n, y + y * n);
  }
  endShape(CLOSE);

  // INNER CIRCLE
  beginShape();
  for (let angle = 0; angle <= 360; angle += 5) {
    var x = innerRadius * cos(radians(angle));
    var y = innerRadius * sin(radians(angle));
    var n = noise(xoff + cos(radians(angle)) * noiseFactor, 
                  yoff + sin(radians(angle)) * noiseFactor);
    var r = map(n, 0, 1, 50, 250);
    fill(35);
    noStroke();
    vertex(x + x * n, y + y * n);
  }
  endShape(CLOSE);

  angle += 0.05;
}