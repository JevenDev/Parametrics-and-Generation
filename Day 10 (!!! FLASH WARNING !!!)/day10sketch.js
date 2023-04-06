var posX, posY;
var moveX = 10;
var moveY = 15;
var trail = [];

function setup() {
  createCanvas(1000, 1000);
  posX = random(100, 900);
  posY = random(100, 900);
  // frameRate(30);
  // createLoop({duration:9, gif:true})
}

function draw() {
  background(35);

  trail.push({x: posX, y: posY});

  noStroke();
  fill(random(255), random(255), random(255));
  textSize(150);
  for (let i = 0; i < trail.length; i++) {
    text("I", trail[i].x, trail[i].y);
  }

  fill(255)
  textSize(200);
  text("I", posX, posY);

  posX += moveX;
  posY += moveY;

  if (posX < 0-10 || posX > width-100) {
    moveX *= -1;
  }
  if (posY < 0+120 || posY > height) {
    moveY *= -1;
  }

  if (trail.length > 200) {
    trail.shift();
  }
}