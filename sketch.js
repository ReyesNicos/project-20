var car, wall;
var speed,weight;


function setup() {
  createCanvas(600,400);
  car = createSprite(50, 200, 50, 50);
  
  wall = createSprite(500,200,40,height/2);
  
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("white");  
  
  var deformation = (0.5*weight*speed*speed)/22500;
  
  

  if(car.x-wall.x < car.width/2 + wall.width/2 && wall.x-car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green";
    }else if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
    }else{
      car.shapeColor="red";
    }
  }
   

  
  drawSprites();
}
