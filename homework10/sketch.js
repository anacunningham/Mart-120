posX = 200;
posY = 295;
move = 0;
titleSize = 32; 
 growSpeed = 0.5; 
maxSize = 150;    
 minSize = 6;   
function setup() {
  createCanvas(400, 400);
 textAlign(CENTER);
}

function draw() {
 background(220);
  textSize(titleSize);
  text("MY SELF PORTRAIT", width / 2, 50);
 titleSize += growSpeed;
   if (titleSize >= maxSize || titleSize <= minSize) {
    growSpeed *= -1; }
 
  text('Ana Cunningham', 275, 350);

  push();
  translate(width / 1.72, height / 1.75); 
  angleMode(DEGREES);               
  rotate(160);                     
  triangle(0, -75, 31, 55, -50, 55); 
pop()
  push();
  translate(width / 2.49, height / 1.75); 
  angleMode(DEGREES);               
  rotate(190);                     
  triangle(0, -75, 31, 55, -50, 55); 
pop()

 circle(200,150,125);
  circle(posX-25,150,20);
  
  circle(posX,150,20);
  posX = posX + 2;
  ellipse(200,200,20,10);
  push();
  scale(4)
  
 point(42.5, 38);
  pop();
  push();
  scale(4)
  point(55, 38);
  pop();
  rect(170,325,20,75);
  rect(210,325,20,75);
  
  push();
  translate(width / 2, height / 2.2)
  triangle(0, -50, 10, .5, -10, .5)
    pop();
    push();
  translate(width / 2.1, height / 1.80)
  line(10, 10, 85, 50);
    pop();
   push();
  translate(width / 1.95, height / 1.63)
  line(-10, -10, -85, 50);
    pop();
 push();
   circle(122,posY,15);
  circle(280,posY-20,15);
    posY = posY + 2; 
   push();
  translate((width / 2) + move, (height / 1.5) - move);
  triangle(0, -52, 30, 60, -30, 60)
    pop();
 move += 2;;
}