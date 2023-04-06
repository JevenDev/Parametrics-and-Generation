var myFont;

function predload(){
    myFont = loadFont("fonts/yourfonthere.otf");
}

function setup(){
    createCanvas(1000, 1000)
    background(120, 120, 320);
    line(0, 0, width, height);

    // fill(145, 200, 120);
    // stroke(0);
    // ellipse(500, 500, 200);

    // fill(300, 250, 150);
    // stroke(255);
    // rect(450, 450, 100, 100);

    fill(0)
    // textFont(yourfonthere)
    textSize(100);
    text("adhsjahdjksad", 500, 500)

    // var k + 0;
    // while (k < 10){

    // }

    clear()
    var i = 0;
    var rand = random(255);
    var bgfill = (rand, rand, rand)
    while(i < 100){
        // background(random(255), random(255), random(255))
        background(bgfill, bgfill, bgfill)
        // fill(random(255), random(255), random(255));
        // stroke(255)
        // ellipse(300+i, 200, 300);
        
        // fill(212, 174, 171);
        // ellipse(300 + i, 200, 100)
        i = i +5;
    }
    // var b = 0;
    // while(b <100){
    //     fill(random(255), random(255), random(255));
    //     stroke(255)

    //     rect(100 + b, 100, 100, 500);
    //     b = b + 5;
    // }

    // LETTER A
    stroke(255);
    fill(255)
    ellipse(450, 500, 500)
    rect(600, 250, 150, 500)
    
    // noFill()
    fill(bgfill)
    ellipse(450, 500, 250)

// LETTER B
    // stroke(255);
    // ellipse(500, 600, 500)
    // rect(250, 150, 150, 700)
    
    // fill(120, 120, 320)
    // ellipse(500, 600, 250)
}

function draw(){
    // fill(rand(255), rand(255), rand(255))
    // ellipse(mouseX, mouseY, rand(50, 100)
}

// function mousePressed(){
//     saveCanvas("Day1-Sketch", "png")
// }