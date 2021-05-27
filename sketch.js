var bg,bgImg
var coin,coinImg 
var girl,girlImg
var police,policeImg
var root ,rootImg
var stone,stoneImg1,stoneImg2,stoneImg3,stoneImg4
var ground 

function preload(){
//BgImg = loadImage("pictures/bg.png")

coinImg = loadImage("pictures/coin.jpg")

girlImg = loadAnimation("pictures/girl1.jpg "," pictures/girl2.jpg" , "pictures/girl3.jpg" , "pictures/girl4.jpg ", "pictures/girl5.jpg")

/*policeImg = loadAnimation("pictures/police1.jpg","pictures/police3.jpg")

stoneImg1 = loadImage("pictures/stone 1.jpg")
stoneImg2 = loadImage("pictures/stone 2.jpg")
stoneImg3 = loadImage("pictures/stone 3.jpg")
stoneImg4 = loadImage("pictures/stone 4.jpg")*/

}
 
function setup() {
  createCanvas(1000,1000);

  /*bg = createSprite(1000,400,1000,500);
  bg.addImage(bgImg)*/

  ground = createSprite(0,800,2000,50)
 
  coin = createSprite(100,400);
  coin.addImage(coinImg)

  girl = createSprite(200,500);
  girl.addAnimation ("girlImg")

}

function draw() {
 

 
ground.velocityX = -5

 if(ground.x<0){
   ground.x = ground.width/2
 }
 drawSprites();
}