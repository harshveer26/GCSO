//const car = car1;
//const car = car2;

var car, car2, car3, weight, speed, wall1, wall2, wall3;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50,100,50,5);
  car2 = createSprite(50,200,50,5);
  car3 = createSprite(50,300,50,5);
  wall1 = createSprite(1200,100,60,80);
  wall2 = createSprite(1200,200,60,80);
  wall3 = createSprite(1200,300,60,80);

   line1 = createSprite(800,150,1600,5);
   line2 = createSprite(800,250,1600,5);
   line3 = createSprite(800,350,1600,5);
   line4 = createSprite(800,50,1600,5);

  speed = random(55,90);
  weight = random(400,1500);




  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

}


function draw() {
  background("black");

  car.shapeColor = "white";
  car2.shapeColor = "white";
  wall1.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  line1.shapeColor = "white"; 
  line2.shapeColor = "white"; 
  line3.shapeColor = "white";  
  line4.shapeColor = "white";

  if(wall1.x - car.x < (wall1.width/2 + car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation > 180){
       car.shapeColor = "red";     
    }else if(deformation < 180  &&  deformation > 100) {
       car.shapeColor = "yellow";  
    }else if(deformation < 100){
       car.shapeColor = "green";  
    }else{
       car.shapeColor = "white";
    }
  }

  if(wall2.x - car2.x < (wall2.width/2 + car2.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if(deformation > 180){
       car2.shapeColor = "yellow";     
    }else if(deformation < 180  &&  deformation > 100) {
       car2.shapeColor = "green";  
    }else if(deformation < 100){
       car2.shapeColor = "red";  
    }else{
       car2.shapeColor = "white";
    }
  }

  if(wall3.x - car3.x < (wall3.width/2 + car3.width)/2){
   car3.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed / 22500;
   if(deformation > 180){
      car3.shapeColor = "green";     
   }else if(deformation < 180  &&  deformation > 100) {
      car3.shapeColor = "red";  
   }else if(deformation < 100){
      car3.shapeColor = "yellow";  
   }else{
      car3.shapeColor = "white";
   }
 }

  drawSprites();
}