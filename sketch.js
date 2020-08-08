var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, options, rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	
	/*packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6*/

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true},options );
	 World.add(world, ground);
	 
	 rect1=new Dustbin(800,660,210,30)
	 rect2=new Dustbin(705,610,20,100)
	 rect3=new Dustbin(895,610,20,100)
     paper1 = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 

  rect1.display();
  rect3.display();
  rect2.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-90});
    
  }
}

