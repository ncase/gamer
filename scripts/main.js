/*****

GAMER GAME:
- VR: Switching between two worlds
- Recalibrating
- Picking up dynamite
- Dialogue
- Super-simple AI

BABY STEPS
1. Create lil' art
2. Tile mapping for obstacles
3. Follow cam, yay
4. Make a little game.

*****/

var actualCanvas = document.getElementById("actual");
var actualContext = actualCanvas.getContext('2d');
var virtualCanvas = document.getElementById("virtual");
var virtualContext = virtualCanvas.getContext('2d');

actualCanvas.style.display = 'none';

///////////////////

var virtualPlayer = new Player();
virtualPlayer.IMAGE = document.getElementById("knight");
virtualPlayer.active = true;

var actualPlayer = new Player();
actualPlayer.IMAGE = document.getElementById("kid");
actualPlayer.active = true;

///////////////////

var actualObstacles = [];
for(var i=0;i<10;i++){
	actualObstacles.push({x:Math.random()*500, y:Math.random()*500});
}
var actualObstacleImage = document.getElementById("mess");

var virtualObstacles = [];
for(var i=0;i<10;i++){
	virtualObstacles.push({x:Math.random()*500, y:Math.random()*500});
}
var virtualObstacleImage = document.getElementById("spikes");

///////////////////

var RAF = window.requestAnimationFrame;
var lastSpace = false;
function draw(){

	if(Key.action && !lastSpace){
		if(virtualPlayer.active = !virtualPlayer.active){
			virtualCanvas.style.display = 'block';
			document.getElementById("virtual_container").style.height = "500px";
			setTimeout(function(){
				actualCanvas.style.display = 'none';
			},400);
		}else{
			actualCanvas.style.display = 'block';
			document.getElementById("virtual_container").style.height = "0px";
			setTimeout(function(){
				virtualCanvas.style.display = 'none';
			},400);
		}
	}
	lastSpace = Key.action;

	virtualPlayer.update();
	actualPlayer.update();

	// DRAW ACTUAL WORLD //

	var ctx = actualContext;
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.save();
	ctx.translate(400-actualPlayer.x,300-actualPlayer.y);
	for(var i=0;i<actualObstacles.length;i++){
		var obs = actualObstacles[i];
		ctx.drawImage(actualObstacleImage, obs.x-50, obs.y-100, 100, 100);
	}
	actualPlayer.draw(ctx);
	ctx.restore();

	// DRAW VIRTUAL WORLD //

	var ctx = virtualContext;
	ctx.fillStyle = "#888888";
	ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
	ctx.save();
	ctx.translate(400-virtualPlayer.x,300-virtualPlayer.y);
	for(var i=0;i<virtualObstacles.length;i++){
		var obs = virtualObstacles[i];
		ctx.drawImage(virtualObstacleImage, obs.x-50, obs.y-100, 100, 100);
	}
	virtualPlayer.draw(ctx);
	ctx.restore();

	RAF(draw);
}
draw();