var bullet, wall,thickness;
var speed,weight;

function setup() {
  speed=random(223,321);
  weight = randon(30,1500);
  thickness=random(30,52)
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2)
  wall.fill("80,80,80")
  car.velocityX = speed;

  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}