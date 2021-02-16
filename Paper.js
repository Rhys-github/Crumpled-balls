class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction : 0.2,
            restitution : 0.3,
            density : 1.0
        }
        this.radius = radius
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world , this.body);
    }

display(){
    var pos = this.body.position;
    fill("yellow");
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.radius,this.radius)
}
}