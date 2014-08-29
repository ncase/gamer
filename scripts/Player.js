function Player(){

	var self = this;
	self.x = 250;
	self.y = 250;
	self.vel = {x:0,y:0};

	self.update = function(){

		if(!self.active) return;

		var acc = 1.5;
		if(Key.left){
			self.vel.x-=acc;
			self.direction = -1;
		}
		if(Key.right){
			self.vel.x+=acc;
			self.direction = 1;
		}
		if(Key.up) self.vel.y-=acc;
		if(Key.down) self.vel.y+=acc;

		self.vel.x *= 0.7;
		self.vel.y *= 0.7;
		self.x += self.vel.x;
		self.y += self.vel.y;

	};

	self.draw = function(ctx){
		ctx.save();
		ctx.translate(self.x,self.y);
		ctx.scale(self.direction,1);
		ctx.drawImage(self.IMAGE, -50,-100,100,100);
		ctx.restore();
	};

}