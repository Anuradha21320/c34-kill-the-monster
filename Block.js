class Block {
    constructor(x,y,width,height){
    
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        World.add(world,this.body);
    }
    display(){

        fill("red");
    
    var p = this.body.position
    var angle = this.body.angle
    push();
    translate(p.x,p.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("black");
    rect(0,0,this.width,this.height);
    pop();
    
    }
    
    
    }