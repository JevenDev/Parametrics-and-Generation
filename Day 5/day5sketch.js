let angle = 0;
let scalar = 50;
let pause = false;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);

  translate(width/2, height/2);

  for (let i = 0; i < 10; i++) {
    push();
    rotate(angle*i);
    let x = sin(angle*i) * scalar;
    let y = cos(angle*i) * scalar;
    stroke(255, 0, 0);
    strokeWeight(25);
    line(x, y, x, -height/2);
    line(x, y, x, height/2);
    pop();
  }

  if (!pause) {
    angle += 0.01;
    scalar += sin(angle*2)*2;
  }

  if (scalar < 50 && !pause) {
    pause = true;
    setTimeout(() => {
      pause = false;
    }, 1000);
  }
}