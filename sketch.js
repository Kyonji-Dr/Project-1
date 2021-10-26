var thing ;
function setup() {
  createCanvas(400,400);
  thing = createSprite (120,320,10,10);
}

function draw() 
{
  background(30);
drawSprites();
if(keyIsDown(LEFT_ARROW)){
  thing.x = thing.x - 2 ;
}if(keyIsDown(RIGHT_ARROW)){
  thing.x = thing.x + 2 ;
}if(keyIsDown(UP_ARROW)){
  thing.y = thing.y -2 ;
}if(keyIsDown(DOWN_ARROW)){
  thing.y = thing.y + 2;
}
}




