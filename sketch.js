var characterX = 50;
var characterY = 50;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];


var mouseShapeX;
var mouseShapeY;
var showMouseCircle = false;

function setup() {
    createCanvas(400, 400);

    
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * 5) + 1;
        shapeYSpeeds[i] = Math.floor(Math.random() * 5) + 1;
        shapeXs[i] = getRandomNumber(400);
        shapeYs[i] = getRandomNumber(400);
        diameters[i] = getRandomNumber(30);
    }
}

function draw() {
    background(255,182,200);

    createBorders(10);

    textSize(16);
    fill(0);
    text("EXIT", width-50, height-50);

    drawCharacter();
    characterMovement();

   
   

  
   fill(255, 140, 50);
    for (var i = 0; i < shapeXs.length; i++) {
        square(shapeXs[i], shapeYs[i], diameters[i]);

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

        
        if (shapeXs[i] > width) shapeXs[i] = 0;
        if (shapeXs[i] < 0) shapeXs[i] = width;
        if (shapeYs[i] > height) shapeYs[i] = 0;
        if (shapeYs[i] < 0) shapeYs[i] = height;
    }

 
    if (characterX > width - 50 && characterY > height - 50) {
        fill(0);
        textSize(26);
        text("You Win!", width/2 - 50, height/2 - 50);
    }

  
    if (showMouseCircle) {
        fill(120,200,140);
        circle(mouseShapeX, mouseShapeY, 25);
    }
}



function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function characterMovement() {
    if(keyIsDown(w)) characterY -= 5;
    if(keyIsDown(s)) characterY += 5;
    if(keyIsDown(a)) characterX -= 5;
    if(keyIsDown(d)) characterX += 5;
}

function drawCharacter() {
    fill(50,40,150);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0,height-thickness,width,thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    showMouseCircle = true; 
}