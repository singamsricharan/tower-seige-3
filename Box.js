class Box{
  constructor(x, y, width, height){
    var options={
      restitution:0,
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    World.add(world,this.body)
  }
  display(){
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
  }
}
