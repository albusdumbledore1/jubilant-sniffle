//Create variables here
var dog,   dogHappy, database, foodS, foodStock,dogImg;




function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(230,200,20,20);
  dog.addImage("dog",dogImg);
  dog.addImage("happy",dogHappy);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  console.log("siddharth");
 dog.changeImage("happy",dogHappy);
 console.log("shukla")
}

  drawSprites();

  //add styles here

}





function writeStock(num){


if (num<0){
  num = 0;


}

else{
  num = num - 1;
}
database.ref("/").update({
  Food  : num
})

}


function readStock(data){
foodS = data.val();
}

