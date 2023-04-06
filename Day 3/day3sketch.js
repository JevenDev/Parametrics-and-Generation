function setup() {
  createCanvas(1000, 1000);
  background(255);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  
  for (var i = 0; i < 100; i++) {
    push();
    translate(random(width), random(height));
    rotate(random(TWO_PI));
    scale(random(0.5, 2));
    fill(random(255), random(255), random(255), 100);
    text("I", 0, 0);
    pop();
  }
  text("I", width/2, height/2);
}