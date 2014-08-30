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

Asset.loadBatch({
	"image":{

		"kid": "img/kid.png",
		"knight": "img/knight.png",
		"mess": "img/mess.png",
		"spikes": "img/spikes.png",

		"dark": "img/dark.png",
		"light": "img/light.png",
		"black": "img/black.png"

	},
	"text":{
		"actual": "maps/actual.txt",
		"virtual": "maps/virtual.txt"
	}
}).then(function(){
	setTimeout(function(){
		Game.init();
	},1);
});