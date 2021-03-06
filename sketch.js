
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200,350,900,10);
  FoodGroup = createGroup();
  ground.velocityX = -4
  
}


function draw() {
  background("lightblue");
  textSize(20);
  stroke("black")
  if(ground.x < 0 ){
    ground.x = ground.width/2
  }
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50 );
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground)
  spawnObstacles();
  spawnBanana();
  drawSprites();
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -8;
   
    obstacle.addImage(obstacleImage)
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
 }
}
function spawnBanana(){
 if (frameCount % 80 === 0){
   var banana = createSprite(400,220,10,40);
   banana.velocityX = -8;
   banana.y = Math.round(random(200,250))
    banana.addImage(bananaImage)
   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
   FoodGroup.add(banana);
   //add each obstacle to the group
 }
}




