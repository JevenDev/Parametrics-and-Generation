var shapes = [];
let speed = 0.005;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  noFill();
  stroke(255, 150);
  // frameRate(30);
  // createLoop({duration:6, gif:true});

  for (var i = 0; i < 5; i++) {
    shapes.push({
      angle: random(TWO_PI),
      radius: random(200, 400),
      noiseScale: random(0.002, 0.01),
      vertexOffset: random(-100, 100),
    });
  }
}

function draw() {
  translate(width / 2, height / 2);
  for (var shape of shapes) {
    var { angle, radius, noiseScale, vertexOffset } = shape;
    rotate(angle);
    beginShape();
    for (var i = 0; i < TWO_PI; i += 0.1) {
      var x = cos(i) * radius;
      var y = sin(i) * radius;
      var n = noise(x * noiseScale, y * noiseScale, frameCount * noiseScale);
      x += cos(n * TWO_PI) * radius * 0.1;
      y += sin(n * TWO_PI) * radius * 0.1;
      x += cos(i + vertexOffset) * 50;
      y += sin(i + vertexOffset) * 50;
      vertex(x, y);
    }
    endShape(CLOSE);
    shape.angle += speed;
  }
}