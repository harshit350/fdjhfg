//Create variables here
var foodS,foodStok;
var dog,happydog,dogimg;
var database;
function preload()
{
  dogimg=loadImage("Dog.png");
  happyDog=loadImge("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStok=database.ref('Food');
  foodStok.on("vlaue",readStock);
  dog=createSprite(250,250);
  dog.addImage("dogimg")
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}
  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW key To Feed Drago Milk!")

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

