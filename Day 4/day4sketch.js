var xPos;
var ghostTrails = [];
const trailTime = 50;

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(300);
  xPos = 350;

  // frameRate(30);
  // createLoop({duration:5, gif:true})
}

function draw() {
  background(255);

  // LETTER T
  xPos += sin(frameCount / 30) * 5;
  ghostTrails.push({x: xPos, y: height / 2, alpha: 75});
  for (var i = ghostTrails.length - 1; i >= 0; i--) {
    const trail = ghostTrails[i];
    fill(0, 0, 255, trail.alpha);
    text('T', trail.x, trail.y);
    trail.alpha -= 5;
    if (trail.alpha <= 0) {
      ghostTrails.splice(i, 1);
    }
  }

  if (ghostTrails.length > 20) {
    ghostTrails.shift();
  }
}