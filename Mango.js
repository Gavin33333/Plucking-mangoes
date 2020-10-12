class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1
			

			
			}
			this.mangoImage = loadImage("Plucking mangoes/mango.png")
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
    display()
    {
			
			var Mangopos=this.body.position;		
			
			push()
			translate(Mangopos.x, Mangopos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("yellow")
			ellipse(0,0,this.r, this.r);
			pop()
    }		
	}