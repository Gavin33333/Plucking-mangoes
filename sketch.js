
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, mango1, mango2,mango3,mango4, Stone1, Boy

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree (675,600,90,350)
ground = new Ground(400,700,800,30)

mango1 = new Mango(655,450,20)
mango2 = new Mango(665,480,20)
mango3 = new Mango(675,470,20)
mango4 = new Mango(685,450,20)

Stone1= new Stone(120,600,20)
elastic1 = new Elastic(Stone1.body, Boy.body);

Boy=createSprite(150,635,50,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  Stone1.display();
  drawSprites();
 
}



