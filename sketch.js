const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionarray=[];
var divisionheight=300;
var plinkoarray=[];
var particlesarray=[];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,height,480,20);
    for(var k=0;k<=width;k=k+80){
      divisionarray.push(new Division(k,height-divisionheight/2,10,divisionheight));
    }

    for(var p=50;p<=width-50;p=p+50){
      plinkoarray.push(new Plinko(p,70))
    }

    for(var p=10;p<=width-10;p=p+50){
      plinkoarray.push(new Plinko(p,130))
    }
     for(var p=50;p<=width-50;p=p+50){
       plinkoarray.push(new Plinko(p,190))
     }
     for(var p=10;p<=width-10;p=p+50){
       plinkoarray.push(new Plinko(p,250))
     }
}

function draw() {
  background(0);
  Engine.update(engine);
  for(var k=0;k<divisionarray.length;k++){
    divisionarray[k].display();
  }

  for(var p=0;p<plinkoarray.length;p++){
    plinkoarray[p].display();
  }
if(frameCount%60==0){
  particlesarray.push(new Particle(random(200,260),30)); 
}
for(var p=0;p<particlesarray.length;p++){
   particlesarray[p].display();

}
ground.display();

}