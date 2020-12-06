var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	var options = {
		isStatic: false
	  }
	
	packageSprite=createSprite(width/2, 80, 10,10, options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.7

	groundSprite=createSprite(width/2, height-1, width,20);
	groundSprite.shapeColor=color(125)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	fill("black")
	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Engine.run(engine);

	 basket = new Basket(660,680,10,100)
	 basket1 = new Basket(520, 680,10,100 )
	 basket2 = new Basket(590, 685, 130,10)
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  
  background(0);
  keyPressed() 
  basket.display();
  basket1.display();
  basket2.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 
	Matter.Body.setStatic(packageBody, false);
	
  }
}



