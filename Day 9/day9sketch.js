var posX, posY;
var moveX = 10;
var moveY = 15;

function setup() {
  createCanvas(1000, 1000);
  posX = random(100, 900);
  posY = random(100, 900);
  // frameRate(30);
  // createLoop({duration:3, gif:true})
}

function draw() {
  background(0, 150, 260);

  fill(255)
  textSize(200);
  text("P", posX, posY);

  posX += moveX;
  posY += moveY;

  if (posX < 0-10 || posX > width-100) {
    moveX *= -1;
  }
  if (posY < 0+120 || posY > height) {
    moveY *= -1;
  }
}