var varterWidth = 200;
var varterHeight = 400;
var offsetX = 400;
var offsetY = 300;

function setup() {
  createCanvas(1000, 1000);
  // frameRate(5);
  // createLoop({duration:3, gif:true});
}

function draw() {
  background(0);

  fill(255);
  textSize(505);
  textAlign(CENTER, CENTER);
  text("R", width/2, height/2);

  for (var i = 0; i < 50; i++) {
    var startX = random(width);
    var startY = random(height);
    var endX = random(width);
    var endY = random(height);
    var thickness = random(1, 5);
    strokeWeight(thickness);
    stroke(random(255), random(255), random(255));
    line(startX, startY, endX, endY);
  }

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      pixels[index] += random(-50, 50);
      pixels[index + 1] += random(-50, 50);
      pixels[index + 2] += random(-50, 50);
    }
  }
  updatePixels();
}