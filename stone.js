class Stone{
    constructor(x,y,radius){
    var options={
       // isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius = radius
    this.image= loadImage("Plucking Mangoes/stone.png")
    World.add(world,this.body)
    }
    display(){
var pos = this.body.position
push()
imageMode(CENTER);
translate(pos.x,pos.y)
image(this.image,0,0,this.radius,this.radius)
pop()
    }
}