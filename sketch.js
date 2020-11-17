const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;

    box1=new Box(700,320,70,70);
    box2=new Box(920,320,70,70);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    box5=new Box(820,160,70,70);
    ground=new Ground(600,height,1200,50);
    pig1=new Pig(820,320);
    pig2=new Pig(820,240);
    log1=new Log(810,315,300,PI/2);
    log2=new Log(810,235,300,PI/2);
    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-(PI/7));
    bird1=new Bird(100,100);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}