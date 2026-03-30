
titleSize = 10; 
   
function setup() {
  createCanvas(400, 400);
 textAlign(CENTER);
}

function draw() {
 background(220);
  textSize(titleSize);
  text("MY SELF PORTRAIT", width / 2, 50);
 
 
 
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
  circle(175,150,20);
  
  circle(225,150,20);
  
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
   circle(122,295,15);
  circle(275,272,15);
     
   push();
  translate((width / 2) , (height / 1.5) );
  triangle(0, -52, 30, 60, -30, 60)
    pop();
 ;
}