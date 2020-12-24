class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
    this.body = Bodies.circle(this.x,this.y,r,options)
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(0);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};