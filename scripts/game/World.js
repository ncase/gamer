var W = 75;
var H = 75;
function World(){
	var self = this;

	self.WALL = "#";
	self.FLOOR = " ";
	self.OBSTACLE = "^";

	self.init = function(){

		// Player
		self.player = new Player();

		// Create background Canvas
		self.bgCanvas = document.createElement("canvas");
		self.bgCanvas.width = self.map[0].length*W;
		self.bgCanvas.height = self.map.length*H;
		self.bgContext = self.bgCanvas.getContext("2d");

		// Draw background
		var ctx = self.bgContext;
		for(var y=0;y<self.map.length;y++){
			for(var x=0;x<self.map[y].length;x++){
				var tile = self.map[y][x];
				var img;
				switch(tile){
					case self.WALL: img=self.WALL_IMAGE; break;
					case self.FLOOR: img=self.FLOOR_IMAGE; break;
					case self.OBSTACLE: img=self.OBSTACLE_IMAGE; break;
					case "X":
						self.player.x = x+0.5;
						self.player.y = y+0.5;
						break;
				}
				ctx.drawImage(img, x*W, y*H, W, H);
			}
		}

	};

	self.update = function(){
		self.player.update();
	};

	self.draw = function(ctx){

		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		ctx.save();

		// Center camera on player
		ctx.translate(-self.player.x*W, -(self.player.y-0.5)*H);
		ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);
		ctx.drawImage(self.bgCanvas,0,0);

		// Draw player
		self.player.draw(ctx);

		ctx.restore();

	};

}