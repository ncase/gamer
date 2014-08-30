function ActualWorld(){

	var self = this;
	World.call(self);

	self.map = Asset.map.actual;
	self.WALL_IMAGE = Asset.image.black;
	self.FLOOR_IMAGE = Asset.image.light; 
	self.OBSTACLE_IMAGE = Asset.image.mess;

	self.init();
	self.player.IMAGE = Asset.image.kid;

}