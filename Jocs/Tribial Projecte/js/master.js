var numRandom;
var numRandomPregunta;
var pregunta;
var maxIntents = 10;
var intents = 0;
var punts = 0;

var hPregunta1 = new Pregunta("Qui foren els fundadors de barcelona?", "Els Romans", "Els Vikings", "Els Musulmans");
var hPregunta2 = new Pregunta("Quina va ser la ciutat romana més important de catalunya?", "Tarragona", "Barcelona", "Girona");
var hPregunta3 = new Pregunta("Ilerda és l’antecessora de l’actual...", "Lleida", "Lloret", "Igualada");
var hPregunta4 = new Pregunta("Què tenen en comú les llengües catalana, francesa i italiana?", "Totes tres deriven del llatí", "Que es parlen a l'Àfrica", "Que provenen del Castella");

var ePregunta1 = new Pregunta("Esport de correr per les montanyes, camins, corriols...", "Trail running", "Curling", "Enduro");
var ePregunta2 = new Pregunta("Què són els X-Games?", "Esdeveniment esportiu d'esports d'acció", "Un esport", "Una modalitat de l'atletisme");
var ePregunta3 = new Pregunta("Que és una Final Four?", "Format final de torneig", "Un esport", "Una marca de pilotes de basquet");
var ePregunta4 = new Pregunta("Quin es el record de tots els temps en marató?", "Dennis Kimetto 28/09/14 Berlín", "Emmanuel Mutai 28/09/14 Berlín", "Dennis Kimetto 13/10/13 Chicago");

var aPregunta1 = new Pregunta("Quin és el sete art", "Cinema", "Escultura", "Musica");
var aPregunta2 = new Pregunta("Qui és l'autor de Moby Dick ?", "Herman Melville", "Henry James", "Henry David Thoreau");
var aPregunta3 = new Pregunta("Qui va ser Antonio Lucio Vivaldi ?", "Violinista i Compositor del Barroc", "Tenor d'Opera", "Guitarrista clàssic");
var aPregunta4 = new Pregunta("Qui és l'autor d'El petit príncep?", "Antoine de Saint-Exupery", "Beatriz Espejo", "Cuahutemoc Sanchez");

var gPregunta1 = new Pregunta("A quin país situaries la ciutat de Cali?", "Colombia", "Alemanya", "Espanya");
var gPregunta2 = new Pregunta("Quina és la capital de Suïssa?", "Berna", "Zurich", "Basilea");
var gPregunta3 = new Pregunta("Quina és la capital d'Islàndia?", "Reikjavik", "Dublín", "Minsk");
var gPregunta4 = new Pregunta("Quin riu passa pel País Basc?", "Ebre", "Guadiana", "Tajo");


var preguntesHistoria = [hPregunta1, hPregunta2, hPregunta3, hPregunta4];
var preguntesEsports = [ePregunta1, ePregunta2, ePregunta3, ePregunta4];
var preguntesArt = [aPregunta1, aPregunta2, aPregunta3, aPregunta4];
var preguntesGeografia = [gPregunta1, gPregunta2, gPregunta3, gPregunta4];

function Pregunta(textPregunta, respostaCorrecte, resposta2, resposta3) {
    this.textPregunta = textPregunta;
    this.respostaCorrecte = respostaCorrecte;
    this.resposta2 = resposta2;
    this.resposta3 = resposta3;
}

$( document ).ready(function() {
	amagarPanels();

    $(".resp").click(function() {
	   var respostaUsuari = $(this).text();
	   validarResposta(respostaUsuari);
	});

	$(".confirm").click(function() {
	   iniciarTribial();
	});
});

function iniciarTribial(){
	amagarPanels();
	$('#btnInfo').hide();
    $('#btnIniciar').hide();

    numRandom = generarNombreRandom(null);

	if (intents < maxIntents){
		switch (numRandom){
			case 1:
				//Historia
				$('#panelHistoria').show();
				numRandomPregunta = generarNombreRandom(preguntesHistoria.length);
				console.log("numRpregunta"+numRandomPregunta);
				pregunta = preguntesHistoria[numRandomPregunta];
				omplirPregunta(pregunta, "h");
				break;
			case 2:
				//Esports
				$('#panelEsports').show();
				numRandomPregunta = generarNombreRandom(preguntesEsports.length);
				console.log("numRpregunta"+numRandomPregunta);
				pregunta = preguntesEsports[numRandomPregunta];
				omplirPregunta(pregunta, "e");
				break;
			case 3:
				//Art
				$('#panelArt').show();
				numRandomPregunta = generarNombreRandom(preguntesArt.length);
				console.log("numRpregunta"+numRandomPregunta);
				pregunta = preguntesArt[numRandomPregunta];
				omplirPregunta(pregunta, "a");
				break;
			case 4:
				//Mates
				$('#panelGeografia').show();
				numRandomPregunta = generarNombreRandom(preguntesGeografia.length);
				console.log("numRpregunta"+numRandomPregunta);
				pregunta = preguntesGeografia[numRandomPregunta];
				omplirPregunta(pregunta, "g");
				break;
		}
	}else{
		amagarPanels();
		if(punts < 5){
			swal({title: "Has de millorar!", text: "Només has encertat "+punts+" preguntes de "+intents+" intents", type: "success" });
		}else{
			swal({title: "Molt bé!", text: "Has encertat "+punts+" preguntes de "+intents+" intents", type: "success" });
		}
	}
}

function omplirPregunta (pregunta, id){
	var ordreBtn = generarNombreRandom(3);

	switch(ordreBtn){
		case 0:
			$("#h1"+id).text(pregunta.textPregunta);
			$("#btn1"+id).text(pregunta.respostaCorrecte);
			$("#btn2"+id).text(pregunta.resposta2);
			$("#btn3"+id).text(pregunta.resposta3);
			break;
		case 1:
			$("#h1"+id).text(pregunta.textPregunta);
			$("#btn2"+id).text(pregunta.respostaCorrecte);
			$("#btn1"+id).text(pregunta.resposta2);
			$("#btn3"+id).text(pregunta.resposta3);
			break;
		case 2:
			$("#h1"+id).text(pregunta.textPregunta);
			$("#btn3"+id).text(pregunta.respostaCorrecte);
			$("#btn2"+id).text(pregunta.resposta2);
			$("#btn1"+id).text(pregunta.resposta3);
			break;
	}
}

function generarNombreRandom(numMaxim){
	if(numMaxim == null){
		var random = Math.floor((Math.random()*4)+1);
	}else{
		var random = Math.floor(Math.random() * (numMaxim));
	}
	return random;
}

function validarResposta(resposta){
	intents++;
	console.log( intents);
	if (resposta == pregunta.respostaCorrecte){
		if(intents < maxIntents){
			swal({   
				title: "Resposta correcte!",   
			    text: "Molt bé segueix aixi!", 
			    type: "success" },

			    function(){ 
			        iniciarTribial(); 
				}
			);
		}else{
			/*amagarPanels();*/
			mostrarResultat();
		}

		punts++;
	}else{
		if(intents < maxIntents){
			swal({   
				title: "Resposta incorrecte!",   
			    text: "Oooohhh, has fallat!", 
			    type: "error",    
			    confirmButtonColor: "#DD6B55" },

			    function(){ 
			        iniciarTribial();
				}
			);
		}else{
			/*amagarPanels();*/
			mostrarResultat();
		}
	}
}

function amagarPanels(){
    $('#panelHistoria').hide();
    $('#panelEsports').hide();
    $('#panelArt').hide();
    $('#panelGeografia').hide();
}

function mostrarResultat(){
	if(punts < 5){
		swal({   
			title: "Has de millorar!",   
		    text: "Només has encertat "+punts+" preguntes de "+intents+" intents", 
		    imageUrl: "images/bad.jpg",
			showConfirmButton: false}
		);
	}else{
		swal({   
			title: "Molt bé!",   
		    text: "Has encertat "+punts+" preguntes de "+intents+" intents", 
		    imageUrl: "images/good.png",
		    showConfirmButton: false }
		);
	}
}