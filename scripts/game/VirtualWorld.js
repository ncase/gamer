function VirtualWorld(){
	
	var self = this;
	World.call(self);

	self.map = Asset.map.virtual;
	self.WALL_IMAGE = Asset.image.black;
	self.FLOOR_IMAGE = Asset.image.dark; 
	self.OBSTACLE_IMAGE = Asset.image.spikes;

	self.update = function(){
		self.player.active = self.active;
		self.player.update();
	};

	self.init();
	self.player.IMAGE = Asset.image.knight;

}