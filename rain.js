class Drop {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,width,height,options);
        this.x = random(0, width);
        this.y = random(0,height);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
        
    }
        
        display() {
            stroke(138,43,226);
            line (this.body.position.x, this.body.position.y,this.body.position.x, this.body.position.y+10);
          // translate(this.body.position.x, this.body.position.y);  

        
   
    

        }
    


}


