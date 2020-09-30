var fixRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,20);
  fixRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(2,88,109);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2
    &&fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2
    &&movingRect.y-fixRect.y<=movingRect.height/2+fixRect.height/2
    &&fixRect.y-movingRect.y<=movingRect.height/2+fixRect.height/2){

    
    fixRect.shapeColor="brown";
    movingRect.shapeColor="brown";
  }
  else{
    fixRect.shapeColor="green";
  movingRect.shapeColor="green";
  }
  drawSprites();
}