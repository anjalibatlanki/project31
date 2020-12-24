const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var particles = [];
//var plinkos = [];
//var divisions = [];
var ground;
//var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
   rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
/*
  ground = new Ground (470,400,480,20);
 // createSprite(400, 200, 50, 50); */

  //Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black"); 
  //Engine.update(engine); 
 // ground.display();
  
  //drawSprites();
}

