var stringParaula;
var paraulaTmp;
var pista;
var arraiParaulesCatala;
var arraiValidacio = new Array ();
var arraiAmostrar;
var intents = 1;
var lletresUtilitzades = "";
var contLletresCorrectes = 0;

var p1 = new Paraula("BANDARRA","Insult genuí català");
var p2 = new Paraula("ALLIOLI","Salsa espessa");
var p3 = new Paraula("REBOMBORI","Soroll");
var p4 = new Paraula("PERRUQUER","Ofici");
var p5 = new Paraula("PAPALLONA","Animal volador");
var p6 = new Paraula("MALAGA","Ciutat espanyola");
var p7 = new Paraula("HANDBOL","Esport");
var p8 = new Paraula("PISSARRA","Eina educativa");
var p9 = new Paraula("BICICLETA","Vehicle");

arraiParaulesCatala = [p1,p2,p3,p4,p5,p6,p7,p8,p9];

$( document ).ready(function() {
	var nRandom = generarNombreRandom(arraiParaulesCatala.length);
	paraulaTmp = arraiParaulesCatala[nRandom].stringParaula;
	console.log(paraulaTmp);
	$("#pista").text(arraiParaulesCatala[nRandom].pista);
	arraiAmostrar = paraulaTmp.split("");
	recorrerParaula(null);

	$(".lletra").click(function() {
	   recorrerParaula(this.id+"")
	    $(this).attr("disabled", true);
	    lletresUtilitzades += this.id+"";
	    $("#lletresUt").text(lletresUtilitzades);
	});

	$("#boto").click(function() {
		var lletraTmp = $("#textBox").val();
		lletraTmp = lletraTmp.toUpperCase();

		if(lletresUtilitzades.indexOf(lletraTmp) == -1){
			recorrerParaula(lletraTmp);
			lletresUtilitzades += lletraTmp;
		}else{
			alert("Eiii aquesta lletra ja l'has fet servir un cop")
		}
	    	
	    $("#"+lletraTmp).attr("disabled", true);
	    $("#textBox").val("");
	    $("#lletresUt").text(lletresUtilitzades);
	});
});

function Paraula(stringParaula, pista) {
    this.stringParaula = stringParaula;
    this.pista = pista;
}

function recorrerParaula(lletra){
	var cadena = "";
	var trobat = false;
	if(lletra==null){
		for (var i = 0; i < arraiAmostrar.length; i++) {
			$("#paraula").prepend("_");
			arraiValidacio[i] = "_";
		}
	}else{
		$("#paraula").text("");
		for (var i = 0; i < arraiAmostrar.length; i++) {
			if(arraiAmostrar[i] == lletra && arraiValidacio[i] == "_"){
				cadena += lletra;
				arraiValidacio[i] = lletra;
				trobat = true;
				contLletresCorrectes++;
			}else if(arraiAmostrar[i] == arraiValidacio[i]){
				cadena += arraiValidacio[i];
			}else{
				cadena += "_";
				arraiValidacio[i] = "_";
			}
		}
		$("#paraula").append(cadena);

		if(!trobat && intents < 10){
			intents++;
			$("#imatge").attr("src", "imatges/"+intents+".png");
		}

		if (intents == 10 ){
			$("#paraula").text(paraulaTmp);
			swal({   
				title: "Has perdut!",   
			    text: "La paraula era "+paraulaTmp, 
			    type: "error",    
			    confirmButtonColor: "#DD6B55" },

			    function(){ 
			        location.reload();
				}
			);
		}else if (contLletresCorrectes == cadena.length){
			swal({   
				title: "Has guanyat!",   
			    text: "La paraula era "+paraulaTmp, 
			    type: "success" },

			    function(){ 
			        location.reload();
				}
			);
		}
	}
}

function generarNombreRandom(numMaxim){
	var random = Math.floor(Math.random() * (numMaxim));

	return random;
}
