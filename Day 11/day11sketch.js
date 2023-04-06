var gridSize = 50;
var rows, cols;
var grid = []; 
var dragging = false; 
var erasing = false;
var prevRow, prevCol;

function setup() {
  createCanvas(1000, 1000);
  rows = height / gridSize;
  cols = width / gridSize;

  for (var i = 0; i < rows; i++) {
    grid.push([]);
    for (var j = 0; j < cols; j++) {
      grid[i].push(0);
    }
  }
}

function draw() {
  background(255);

  // Draw the grid
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        fill(255);
      } else {
        fill(grid[i][j]);
      }
      rect(j * gridSize, i * gridSize, gridSize, gridSize);
    }
  }
}

function mousePressed() {
  var row = Math.floor(mouseY / gridSize);
  var col = Math.floor(mouseX / gridSize);

  if (mouseButton === RIGHT) {
    erasing = true;
    grid[row][col] = 0;
    prevRow = row;
    prevCol = col;

  } else {
    grid[row][col] = color(random(255), random(255), random(255));
    prevRow = row;
    prevCol = col;
    dragging = true;
  }
}

function mouseDragged() {
  if (dragging) {
    var row = Math.floor(mouseY / gridSize);
    var col = Math.floor(mouseX / gridSize);

    if (row !== prevRow || col !== prevCol) {
      grid[row][col] = color(random(255), random(255), random(255));
      prevRow = row;
      prevCol = col;
    }
  } else if (erasing) {
    var row = Math.floor(mouseY / gridSize);
    var col = Math.floor(mouseX / gridSize);
    grid[row][col] = 0;
    prevRow = row;
    prevCol = col;
  }
}

function mouseReleased() {
  dragging = false;
  erasing = false;
}