const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(200,200);
  engine = Engine.create();
    world = engine.world;
   
    base =new Drop(10,120,3,2);
    base2 =new Drop(20,130,3,2);
    base3 =new Drop(50,140,3,2);
    base4 =new Drop(70,150,3,2);
    base5 =new Drop(90,160,3,2);
    base6 =new Drop(10,170,3,2);
    base7 =new Drop(16,18,3,2);
    base8 =new Drop(100,90,3,2);
    base9 =new Drop(70,20,3,2);
    base10 =new Drop(120,120,3,2);
    base11 =new Drop(30,30,3,2);
    base12 =new Drop(40,40,3,2);
    base13=new Drop(150,150,3,2);
    base14 =new Drop(160,60,3,2);
    base15 =new Drop(170,70,3,2);
    base16 =new Drop(180,80,3,2);
    base17 =new Drop(190,90,3,2);
    base18 =new Drop(100,80,3,2);
    base19 =new Drop(130,50,3,2); 
    base20 =new Drop(120,10,3,2); 
        
        
        

    


  
}

function draw() {
  background("yellow"); 
  Engine.update(engine); 

 base.display();
 base2.display();
 base3.display();
 base4.display();
 base5.display();
 base6.display();
 base7.display();
 base8.display();
 base9.display();
 base10.display();
 base11.display();
 base12.display();
 base13.display();
 base14.display();
 base15.display();
 base16.display();
 base17.display();
 base18.display();
 base19.display();
 base20.display();
 //base.display();

 
}