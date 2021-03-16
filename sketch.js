const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var canvas;
var spaceship,spaceshipImage;

var backgroundImage;

var scene;

var edges; 

var spacecrafts,spacecraftImage ;

function preload(){
 spaceshipImage=loadImage("space2.png");
 backgroundImage=loadImage("background 1.jpg");
 spacecraftImage=loadImage("space1.png");

}

function setup() {
  
 canvas= createCanvas(displayWidth,displayHeight-170);
 
 // scene=createSprite(0,0,displayWidth,displayHeight);
 // scene.addImage(backgroundImage);
 // scene.scale=7;
 // scene.x=scene.width/2;

  engine=Engine.create();
  world=engine.world;

  spaceship=createSprite(displayWidth/2,600,100,50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale=0.2;

  
}

function draw() {
  background(backgroundImage); 
  spaceship.velocityY=0;
  spaceship.velocityX=0;
 //scene.velocityX=+3; 

 // if(scene.x<0){
  //scene.x=scene.width/2;

  //}
  
  
  Engine.update(engine);

  if(keyDown("UP_ARROW")){

    spaceship.velocityY=-3;
    spaceship.velocityX=0;
  }

  if(keyDown("DOWN_ARROW")){

    spaceship.velocityY=3;
    spaceship.velocityX=0;
  }

  if(keyDown("LEFT_ARROW")){

    spaceship.velocityY=0;
    spaceship.velocityX=-3;
  }
  if(keyDown("RIGHT_ARROW")){

    spaceship.velocityY=0;
    spaceship.velocityX=3;
  }

 
 
  edges=createEdgeSprites();
  spaceship.bounceOff(edges);
  
 spawnSpaceCrafts();
  drawSprites();
}

function spawnSpaceCrafts(){
if(frameCount%80===0){
  spacecrafts=createSprite(1000,100,200,100);
  spacecrafts.x=Math.round(random(80,2000));
  spacecrafts.addImage(spacecraftImage);
  spacecrafts.scale=0.5
  
   spacecrafts.velocityY=3;

}


}