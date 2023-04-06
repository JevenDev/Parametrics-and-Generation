var angle = 0;

function setup() {
    createCanvas(1000, 1000);
    // frameRate(30);
    // createLoop({duration:3, gif:true})
}

function draw() {
    background(0, 150, 220);
    translate(width / 2, height / 2);
    rotate(angle);
    
    rect(-33.5, -100, 75, 400);
    translate(0, -100);
    rect(-150, -35, 300, 75);
    stroke(255)
    
    angle += 0.01;
}