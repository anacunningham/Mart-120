function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

var characterX = 50;
var characterY = 300;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 50;
var shapeY = 100;
var shapeXSpeed;
var shapeYSpeed;


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 400);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(50,50);
}

function draw()
{
    background(255,182,200);
    stroke(0);
    fill(0);
    
    
    createBorders(10);

    textSize(16);
    text("EXIT", width-50,height-50)

    drawCharacter();
    characterMovement();


    fill(250,50,20);
   
    circle(shapeX, shapeY, 50);
rect(200, 150, 50, 50);
rect(50, 150, 50, 50);
    rect(200, 150, 50, 100);
  rect(200, 50, 50, 50);
  rect(200, 50, 100, 50);
  rect(50, 300, 50, 50);
  rect(100, 300, 50, 50);
  rect(300, 300, 50, 50);
  rect(300, 250, 50, 50);
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

   
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
 
    

    
    fill(120,200,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
   
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
   
}

function drawCharacter()
{
    fill(50,40,150);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
  
    rect(0,0,width,thickness);
    
    rect(0,0,thickness,height);
    
    rect(0, height-thickness,width, thickness);
   
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
