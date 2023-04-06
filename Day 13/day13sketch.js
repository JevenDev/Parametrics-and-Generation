function setup() {
  createCanvas(1000, 1000);
  background(0);
  // frameRate(30);
  // createLoop({duration:4, gif:true})
}

function draw() {
  var points = [];
  for (var i = 0; i < 10; i++) {
    var x = random(width * -0.5, width * 1.5);
    var y = random(height * -0.5, height * 1.5);
    points.push(createVector(x, y));
  }

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y);
  }
  vertex(width * 0.8, height * 0.8);
  vertex(width * 0.2, height * 0.8);
  endShape(CLOSE);

  var noiseFactor = 0.02;
  beginShape();
  for (var i = 0; i < points.length; i++) {
    var noiseX = noise(points[i].x * noiseFactor, points[i].y * noiseFactor);
    var noiseY = noise(points[i].x * noiseFactor + 100, points[i].y * noiseFactor + 100);
    var x = lerp(points[i].x, width * 0.5, noiseX);
    var y = lerp(points[i].y, height * 0.5, noiseY);
    vertex(x, y);
  }
  vertex(width * 0.8, height * 0.8);
  vertex(width * 0.2, height * 0.8);
  endShape(CLOSE);

  noStroke();
  fill(1);
  textSize(height/2);
  textAlign(CENTER, CENTER);
  text("v", width/2, height/2);
}