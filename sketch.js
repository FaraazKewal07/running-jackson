
//creating variables
var path, pathImg ;
var jake, jakeImg ;


function preload(){

  //loading image and loading animation
  pathImg = loadImage("path.png");
jakeImg = loadAnimation("jake1.png" , "jake2.png" , "jake3.png" ,"jake4.png" , "jake5.png");
}
function setup(){
  createCanvas(400,400);

  //creating sprite for path
  path = createSprite(200,200) ;
  path.addImage("path", pathImg) ;
  path.velocityY = 4 ;
  path.scale = 1.2;

  //creating sprite for jake
  jake=createSprite(180,340,50,170);
  jake.addAnimation("running" , jakeImg);
  
  //creating boundries
  left_boundary=createSprite(25,200,50,400);
  right_boundary=createSprite(375,200,50,400);
 left_boundary.visible=false;
right_boundary.visible=false;


}

function draw () {

  //giving if condition
  if (path.y > 400) {
path.y = height/2 ; 
}

//moving jake along with the mouse 
jake.x = World.mouseX

//colliding jake on the boundaries
jake.collide(left_boundary);
jake.collide(right_boundary);

//colliding jake on edge sprites
edges=createEdgeSprites();
jake.collide(edges[3]);


drawSprites()
}
