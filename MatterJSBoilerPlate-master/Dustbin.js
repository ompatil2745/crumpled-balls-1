class dustbin{

constructor(x,y){

this.x=x;
this.y=y;
this.dustbinwidth=200;
this.dustbinheight=100;
this.wallthickness=20;
this.angle=0;
this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true})
this.leftwallbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isSTtaic:true});
Matter.Body.setAngle(this.leftwallbody,this.angle);
this.rightwallbody=bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isSTtatic:true});
Matter.Body.setAngle(this.rightwallbody,-1*this.angle)
World.add(world,this.bottombody);
World.add(world,this.leftwallbody);
World.add(world,this.rightwallbody);

}
display(){

var posbottom=this.bottombody.position;
var posleft=this.leftwallbody.position;
var posright=this.rightwallbody.position;
push()
translate(posleft.x,posleft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
stroke(255);
rotate(this.angle);
rect(0,0,this.wallthickness,this.dustbinheight)
pop()

push()
translate(posright.x,posright.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
stroke(255);
rotate(-1*this.angle);
rect(0,0,this.wallthickness,this.dustbinheight)
pop()

push()
translate(posbottom.x,posbottom.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
stroke(255);

rect(0,0,this.dustbinwidth,this.wallthickness)
pop()

}

}