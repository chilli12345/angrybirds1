class Box{
    constructor(x,y,width,height){
      var options={
       'restitution':0.8,
       'friction':1.0,
       "density":1.0,
      }
      
      /*this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width=width;
      this.height=height;*/
      this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(4);
        fill("white");
         rect(0,0,this.width,this.height);
        pop();
    }
}

