var numCols = 50;
var numRows = 50;
var canvasSize = 1000;
var colWidth = canvasSize / numCols;
var rowHeight = canvasSize / numRows;
var matrix = [];
var colors = [];

function setup() {
  createCanvas(1000, 1000);
  // frameRate(60);
  // createLoop({duration:3, gif:true})
  
// START THE WATERFALL
  for (var i = 0; i < numRows; i++) {
    matrix[i] = [];
    for (var m = 0; m < numCols; m++) {
      matrix[i][m] = random(0, 0.3);
    }
  }
  
  for (var i = 0; i < numCols; i++) {
    colors[i] = color(0, random(255), 0);
  }
}

function draw() {
  for (var i = numRows - 1; i > 0; i--) {
    for (var m = 0; m < numCols; m++) {
      matrix[i][m] = matrix[i - 1][m];
    }
  }
  
  for (var m = 0; m < numCols; m++) {
    matrix[0][m] = random(0, .3);
  }
  
  for (var i = 0; i < numRows; i++) {
    for (var m = 0; m < numCols; m++) {
      var x = m * colWidth;
      var y = i * rowHeight;
      var c = lerpColor(colors[m], color(255), matrix[i][m]);
      fill(c);
      rect(x, y, colWidth, rowHeight);
    }
  }
  
  var lastColor = colors[numCols - 1];
  for (var i = numCols - 1; i > 0; i--) {
  }
  colors[0] = lastColor;

  fill(255);
  textSize(505);
  textAlign(CENTER, CENTER);
  text("M", width/2, height/2);
}