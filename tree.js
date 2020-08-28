class Tree{
    constructor(x,y,width,height){
        var options={
        isStatic:true, 
        density:1.2,
        friction:0.5,
        restitution:0.8
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height; 
    this.image=loadImage("Plucking mangoes/tree.png")
    World.add(world,this.body);
    }
    display(){
imageMode(CENTER)
image(this.image,600,380,this.width,this.height)
    }
}