//Create variables here
var foodS,foodStock;
var dog,happyDog,dogimg;
var database;
function preload()
{
  dogimg=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStok=database.ref('Food');
  foodStok.on("value",readStock);
  dog=createSprite(250,250,20,40);
  dog.addImage(dogimg)
  dog.scale=0.2;
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
 
  textSize(20)
fill("white")
  text("Note: Press UP_ARROW key To Feed Drago Milk!",30,30,10000,20)
 
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x <= 0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

