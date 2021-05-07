var bg, bgimg
var boy, boyimg
var eyeofender, eyeofenderimg
var diamond, diamondimg
var redstone, redstoneimg

function preload(){
bgimg=loadAnimation("images/bg1.png", "images/bg2.png", "images/bg3.png", "images/bg4.png", 
"images/bg5.png","images/bg6.png", "images/bg7.png")
boyimg=loadImage("images/boy.png")
redstoneimg=loadAnimation("images/redstone1.png", "images/redstone2.png", "images/redstone3.png", 
"images/redstone4.png", "images/redstone5.png", "images/redstone6.png", "images/redstone7.png", 
"images/redstone8.png")

}

function setup() {
  createCanvas(1350,650);
  bg= createSprite(675, 325, 1500, 650);
  bg.addAnimation("bg", bgimg)
  bg.scale= 1.8
  boy=createSprite(250, 450)
  boy.addImage(boyimg)
  boy.scale=0.5
}

function draw() {
  background("black");  
  if(keyDown("w")){
    boy.y=boy.y-10
  }
  if(keyDown("s")){
    boy.y=boy.y+10
  }
  spawnredstone();
  spawndiamond();
  spawneyeofender();
  drawSprites();
}

function spawnredstone(){
  if(frameCount%100===0){
    redstone=createSprite(1360, 400, 15, 15)
    redstone.y= random(100, 550)
    //redstone.addAnimation("redstone", redstoneimg)
    redstone.velocityX= -4
  }
}
function spawndiamond(){
  if(frameCount%130===0){
    diamond=createSprite(1360, 400, 15, 15)
    //diamond.addAnimation("diamond", diamondimg)
    diamond.y= random(100, 550)
    diamond.velocityX= -4
  }
}
function spawneyeofender(){
  if(frameCount%160===0){
    eyeofender=createSprite(1360, 400, 15, 15)
    //eyeofender.addAnimation("eyeofender", eyeofenderimg)
    eyeofender.y= random(100, 550)
    eyeofender.velocityX= -4
  }
}