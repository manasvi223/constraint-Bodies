class Chain {
    constructor(bodyA,bodyB) {
      var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
      }
      this.chain = Constraint.create(options);
      ///this.width = width;
      //this.height = height;
      World.add(world, this.chain);
    }
    display(){
      //var pos =this.body.position;
      var pointA = this.chain.bodyA.position 
      var pointB = this.chain.bodyB.position
      //rectMode(CENTER);
      //fill("brown");
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }