
//Crear el canvas (incloure gràfics)
var canvas = document.createElement("canvas");		//Serveix per crear gràfics.
var ctx = canvas.getContext("2d");
canvas.width = 512;		//Grandària de la pantalla.
canvas.height = 480;	//Grandària de la pantalla.

document.body.appendChild(canvas);

//Imatge de fons (Background).
var fonsLlest = false;	//Esperar a que estigui carregada la pàgina per carregar les imatges i no peti.
var fonsImg = new Image();

fonsImg.onload = function () {
	fonsLlest = true;
};

fonsImg.src = "background.png";

//Imatge de personatge
var heroiLlest = false;
var heroiImg = new Image();

heroiImg.onload = function () {
	heroiLlest = true;
};

heroiImg.src = "hero.png";

//Imatge del monstre
var monstreLlest = false;
var monstreImg = new Image();

monstreImg.onload = function () {
	monstreLlest = true;
};

monstreImg.src = "monster.png";


//Objectes del joc
var heroi = {
	speed: 256 // movement in pixels per second
	};
var monster = {};
var monstersCaught = 0;	//Monstres atrapats pel jugador


//Entrades del jugador
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
heroi.x = canvas.width / 2;
heroi.y = canvas.height / 2;
// Throw the monster somewhere on the screen randomly
monster.x = 32 + (Math.random() * (canvas.width - 64));
monster.y = 32 + (Math.random() * (canvas.height - 64));
};

//Actualitzar els objectes (comprovar tecles)
var update = function (modifier) {
if (38 in keysDown) { // Player holding up
heroi.y -= heroi.speed * modifier;
}
if (40 in keysDown) { // Player holding down
heroi.y += heroi.speed * modifier;
}
if (37 in keysDown) { // Player holding left
heroi.x -= heroi.speed * modifier;
}
if (39 in keysDown) { // Player holding right
heroi.x += heroi.speed * modifier;
}
	//Estas pulsant?
if (
	heroi.x <= (monster.x + 32)
	&& monster.x <= (heroi.x + 32)
	&& heroi.y <= (monster.y + 32)
	&& monster.y <= (heroi.y + 32)
) {
	++monstersCaught;
	reset();
}
};


//Dibuixar els objectes.
var render = function () {
if (fonsLlest) {
ctx.drawImage(fonsImg, 0, 0);
}
if (heroiLlest) {
ctx.drawImage(heroiImg, heroi.x, heroi.y);
}
if (monstreLlest) {
ctx.drawImage(monstreImg, monster.x, monster.y);
}

	//Puntuació
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};


//Bucle principal.
var main = function () {
var now = Date.now();
var delta = now - then;
update(delta / 1000);
render();
then = now;

// Request to do this again ASAP
requestAnimationFrame(main);
};
// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();		
