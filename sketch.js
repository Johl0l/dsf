var hypnoticBall, database;
var position;
var Canvas,backgroundImg;
var gameState=0;
var forn,game,player;

function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
}

function draw(){
  
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
