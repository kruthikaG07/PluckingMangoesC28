
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,stone,mango,boy,boyImg,mango1,mango2,mango3,mango4,mango5,elastic,constraintStone,treeImg
function preload()
{
   boyImg = loadImage("Plucking mangoes/boy.png")
   treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  boy=createSprite(130,600,30,800);
  boy.addImage(boyImg)
  boy.scale = 0.12;  
  //tree= new Tree(600,500,445,580);
  ground = new Ground (400,650,800,100);
  stone = new Stone(60,530,55);
  mango1 = new Mango(550,350,50)
  mango2 = new Mango(450,280,50)
  mango3 = new Mango(570,150,50)
  mango4 = new Mango(680,260,50)
  mango5 = new Mango(750,320,50)
  elastic = new Elastic(stone.body,{x:60,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  image(treeImg,350,100,445,580)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();
  stone.display();
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  elastic.fly();
  
}
 function detectcollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
 }

 function keyPressed(){
   if(keyCode === 32) {
     Matter.Body.setPosition(stone.body,{x:60,y:530})
     elastic.attach(stone.body)
   }
 }
