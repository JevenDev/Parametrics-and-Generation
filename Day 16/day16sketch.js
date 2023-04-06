function setup() {
  createCanvas(1000, 1000);
  // frameRate(30);
  // createLoop({duration:10, gif:true})
}

function draw() {
  background(255, 50, 0);
  stroke(0);
  noFill();
  
  // MOVING ANIMATION
  // frameCount = NUMBER OF FRAMES PASSED
  let x = width/2 + sin(frameCount*0.01)*200;
  let y = height/2 + cos(frameCount*0.02)*200;
  let length = 300;
  let angle = map(sin(frameCount*0.01), -1, 1, -PI/2, PI/2);
  
  // LETTER D
  push();
  translate(x, y);
  rotate(angle);
  strokeWeight(50);
  line(0, 0, 0, length);
  line(0, 0, length/2, length/2);
  line(0, length, length/2, length/2);
  pop();
}