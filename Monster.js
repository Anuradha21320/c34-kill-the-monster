class Monster {
    constructor(x,y,r){
    
        var options = {
            isStatic : true
         
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);  
            

     World.add(world,this.body);
    }
    display(){


    
    var p = this.body.position
    var angle = this.body.angle
    push();
    translate(p.x,p.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,200,150);
    pop();
    
    }
    
    
    }