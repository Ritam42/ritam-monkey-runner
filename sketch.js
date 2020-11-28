var PLAY = 1;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score;

function preload(){
   
 monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", " sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(400, 400);
  
 monkey = createSprite(50,350,20,50); 
 monkey.addAnimation("running", monkey_running);
 monkey.scale = 0.1; 
  
 ground = createSprite(350,380,400,10);
 ground.x = ground.width /2;
  
 FoodGroup = createGroup();
 obstacleGroup = createGroup(); 
  
 score = 0; 
}

function draw() {
  
 background("white");
  
 fill("black"); 
 textSize(20); 
 text("Survival Time:" + score, 150, 20); 
  
 if(gameState === PLAY){
   
   ground.velocityX = -4;
 if (ground.x < 200){
     ground.x = ground.width/2;
    } 

 if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
 if(monkey.isTouching(FoodGroup) ){
    FoodGroup.destroyEach();
    score = score + 2;
     }
   
  switch(score) {
      case 10: monkey.scale = 0.12;
              break;
      case 20: monkey.scale = 0.14;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.2;
              break;
     default: break;
    } 
   
 monkey.velocityY = monkey.velocityY + 0.8;
  
 monkey.collide(ground); 
  
 spawnbanana();
 spawnobstacle();
   
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale = 0.1;
    score = 0;
  } 
 }  
   
 drawSprites(); 
}

function spawnbanana(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -5;
    
    banana.lifetime = 200;
    
    banana.depth = banana.depth;
    
    FoodGroup.add(banana);
    
  }
  
}

function spawnobstacle(){
  
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,340,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;         
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacle.collide(ground);
   
    obstacleGroup.add(obstacle);
  
  }  
}









