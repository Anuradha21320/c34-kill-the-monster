class Hero {
    constructor(x,y,r){
    
        var options = {
            density : 1,
            frictionAir : 1
         
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);  
        this.image.scale = 0.1      


        World.add(world,this.body);
    }
    display(){

       // fill("pink");
    
    var p = this.body.position
    var angle = this.body.angle
    push();
    translate(p.x,p.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,250,200);
    pop();
    
    }
    
    
    }