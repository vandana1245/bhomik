var tank1,tank2;
var tankImg1,tankImg2;

var background;
var bg,bg2,bg3;




function preload(){

  bg = loadImage("./bg.jpg");
  bg1 = loadImage("./bg2.jpg");
  bg2 = loadImage("./bg3.jpg");

  tankImg1 = loadImage("./tank1.png");
  tankImg2 = loadImage("./tank3.png");


}
function setup() {
  createCanvas(1700,850);

  var tank1= createSprite(200,800,20,20);
  tank1.addImage(tankImg1)
  
  

}

function draw() {
  background(bg); 
  

  spawnTanks();

  drawSprites();
  


}

function spawnTanks() {
  if(frameCount%200 === 0) {
    tank2 = createSprite(1700,800,20,20);
    tank2.addImage(tankImg2);
    tank2.velocityX = -3;
  }
}