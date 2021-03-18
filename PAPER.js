class PAPER{
 
	constructor(){
	var options = {
        resitution :0,
        friction :0,
        density :1.2
    }
    this.body = Bodies.circle(250,540,20,options)
    this.width = 70;
    this.image = loadImage("paper.png")
    World.add(world,this.body)
	}
	display(){

var pos = this.body.position
var angle = this.body.angle
fill("grey")
rotate(angle)
imageMode(CENTER)
image(this.image,pos.x,pos.y,70,70)


 }


  }