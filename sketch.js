var car , wall;
var speed, weight;
var deformation;
function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(50, 200, 50, 50);
  wall= createSprite(width-100,height/2,50,height/0.5);
 wall.shapeColor=  "cyan"
  speed = random(55,90);
  weight= random(1500,400);
  car.velocityX = speed;

  deformation= (0.5 *weight* speed*speed)/22500;

}

function draw() {
  background(0);  


  if(deformation <100){
    car.shapeColor ="Green"
  }else if(deformation > 100 && deformation<180){
    car.shapeColor = "yellow"
  }else{
    car.shapeColor = "red"
  }
  drawSprites();
}