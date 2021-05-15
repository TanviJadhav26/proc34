class Ball{
    constructor(x,y,r){
        var option={
            restitution:0.5,
                density:1,
            friction:0.5,
        }
        this.body=Bodies.circle(x,y,r,option);

        World.add(world,this.body);
       this.r=r;
    }
    display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        
        pop ();

    }
}