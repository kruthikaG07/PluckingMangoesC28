class Elastic{
    constructor(bodyA,pointB){
   var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.004
   }
   this.pointB = pointB;
   this.elastic= Constraint.create(options)
   World.add(world,this.elastic);
    }
    fly(){
        this.elastic.bodyA=null;
    }
    
    display(){
        if(this.elastic.bodyA){
       var  pointA = this.elastic.bodyA.position;
       var  pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        }
    attach(body){
        this.elastic.bodyA = body;
    }
}
