window.Game = {};
Game.init = function(){

	// Map to 2D Array
	Asset.map = {};
	function _textToMap(mapName){
		var map = Asset.text[mapName];
		map = map.split("\n");
		for(var i=0;i<map.length;i++){
			map[i] = map[i].split("");
		}
		Asset.map[mapName] = map;
	}
	_textToMap("actual");
	_textToMap("virtual");

	// Create Worlds
	Game.actualWorld = new ActualWorld();
	Game.virtualWorld = new VirtualWorld();

	// Toggling Virtual World
	Game.virtualWorld.active = true;
	subscribe("mouse/down",function(code){
		if(code!="action") return;
		Game.virtualWorld.active = !Game.virtualWorld.active;
	});

	// Update Call
	var updatedSinceLastDraw = false;
	setInterval(function(){
		updatedSinceLastDraw = true;
		Game.virtualWorld.update();
		Game.actualWorld.update();
	},1000/30);

	// Draw Call
	function _createCanvas(){
		var canvas = document.createElement("canvas");
		canvas.width = 800;
		canvas.height = 500;
		return canvas;
	}
	var actualCanvas = _createCanvas();
	var actualContext = actualCanvas.getContext('2d');
	var virtualCanvas = _createCanvas();
	var virtualContext = virtualCanvas.getContext('2d');
	var RAF = window.requestAnimationFrame;
	Game.canvas = document.getElementById("game");
	Game.context = Game.canvas.getContext("2d");
	function draw(){
		
		updatedSinceLastDraw = false;

		Game.virtualWorld.draw(virtualContext);
		Game.actualWorld.draw(actualContext);

		Game.context.clearRect(0,0,800,500);
		if(Game.virtualWorld.active){
			Game.context.drawImage(virtualCanvas,0,0);
		}else{
			Game.context.drawImage(actualCanvas,0,0);
		}
		
		RAF(draw);

	}
	draw();

};