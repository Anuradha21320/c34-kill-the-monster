class Ground {
    constructor(x,y,width,height){
    
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        World.add(world,this.body);
    }
    display(){

        fill("white")
    
    var p = this.body.position
    var angle = this.body.angle
   rectMode(CENTER);
   rect(p.x,p.y,this.width,this.height);
    
    
    }
    
    
    }