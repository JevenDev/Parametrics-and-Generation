function setup() {
    createCanvas(1000, 1000);
    background(0, 150, 220);
  }
  
  function mouseClicked() {
    textSize(100);
    text("F", mouseX, mouseY);
  }

  function mouseDragged() {
    textSize(100);
    text("F", mouseX, mouseY);
  }