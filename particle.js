class Particle {
    constructor(x,y){
        var options = {
            restitution:0.4
        }
  this.r=10;
  this.body=Bodies.circle(x,y,this.r,options);
World.add(world,this.body);
this.colour=color(random(0,255),random(0,255),random(0,255))
    }

    display(){
        var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.colour);
      ellipse(pos.x, pos.y, this.r, this.r);
    
    }
}