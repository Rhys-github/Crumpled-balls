class DustBin{
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }
        this.body1 = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world , this.body1)
    }
        display(){
        var pos = this.body1.position
        rectMode(CENTER)
        fill("yellow")
        rect(pos.x,pos.y,this.width,this.height)
        
        
    }
}

