function Player(){

	var self = this;
	self.x = 0;
	self.y = 0;
	self.vel = {x:0,y:0};
	self.active = true;

	self.update = function(){

		var acc = 0.05;
		if(self.active){
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
		}else{
			if(Key.left){
				self.direction = -1;
			}
			if(Key.right){
				self.direction = 1;
			}
		}

		self.vel.x *= 0.7;
		self.vel.y *= 0.7;
		self.x += self.vel.x;
		self.y += self.vel.y;

	};

	self.draw = function(ctx){
		ctx.save();
		ctx.translate(self.x*W,self.y*H);
		ctx.scale(self.direction,1);
		ctx.drawImage(self.IMAGE, -50,-100,100,100);
		ctx.restore();
	};

}