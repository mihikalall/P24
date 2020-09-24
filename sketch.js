//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{  	dog=loadImage("images/dogImg.png")
    happyDog=loadImage("images/dogImg1.png")
   


	//load images here
}

function setup() {
	createCanvas(500, 500); 
  var dog1 = createSprite (300,200,10,10)
  
  
  dog1.addImage(dog);
  dog1.scale = .2
  database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",(readStock));
}


function draw() {  
background(46, 139, 87);
if (keyWentDown(UP_ARROW)){
  foodS=foodS-1
  writeStock(foodS);
  console.log(foodS)
dog1.changeImage(happyDog);
}

  drawSprites();
  //add styles here

}
function  readStock(data){
  foodS=data.val();
}
function writeStock(x) {
  database.ref('/').update({
    food:x
  })
}



