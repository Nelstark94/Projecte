var verbsAng = ["accept", "allow", "ask", "believe", "borrow", "break", "bring", "buy", "can/be able", "cancel", "change",
                "clean", "comb", "complain", "cough", "count", "cut", "dance", "draw", "drink", "drive", "eat", "explain",
                "fall", "fill", "find", "finish", "fit", "fix", "fly", "forget", "give", "go", "have", "hear", "hurt", "know",
                "learn", "leave", "listen", "live", "look", "lose", "make/do", "need", "open ", "close/shut", "organize", "pay",
                "play", "put", "rain", "read", "reply", "run", "say", "see", "sell", "send", "sign", "sing", "sit", "sleep",
                "smoke", "speak", "spell", "spend", "stand", "start/begin", "study", "succeed", "swim", "take", "talk", "teach",
                "tell", "think", "translate", "travel", "try", "turn off", "turn on", "type", "understand", "use", "wait",
                "wake up", "want", "watch", "work", "worry", "write"];

var verbsEs = ["aceptar", "permitir/dejar", "preguntar", "creer", "prestar", "romper", "traer", "comprar", "poder",
                "cancelar", "cambiar", "limpiar", "peinar", "quejarse", "toser", "contar", "cortar", "bailar", "dibujar",
                "beber", "conducir", "comer", "explicar", "caer", "llenar", "encontrar", "terminar", "saber", "reparar",
                "volar", "olvidar", "dar", "ir", "tener", "oir", "dañar", "saber", "aprender", "salir",
                "escuchar", "vivir", "mirar", "perder", "hacer", "necesitar", "abrir", "cerrar", "organizar", "pagar", "jugar",
                "poner", "llover", "leer", "responder", "correr", "decir", "ver", "vender", "enviar", "firmar", "cantar", "sentarse",
                "dormir", "fumar", "hablar", "deletrear", "gastar", "ponerse de pie", "comenzar", "estudiar", "tener exito",
                "nadar", "tomar", "hablar", "enseñar", "decir", "pensar", "traducir", "viajar", "intentar", "apagar", "encender",
                "tipo", "entender", "utilizar", "esperar", "despertar", "querer", "mirar", "trabajar",
                "preocuparse", "escribir"];

var verbsCat = ["acceptar", "permetre", "preguntar", "creure", "prestar", "trencar", "portar", "comprar", "poder",
                "cancel·lar", "canviar", "netejar", "pentinar", "queixar-se", "tossir", "explicar", "tallar", "ballar", "dibuixar",
                "beure", "conduir", "menjar", "explicar", "caure", "omplir", "trobar", "acabar", "saber", "reparar",
                "volar", "oblidar", "donar", "anar", "tenir", "sentir", "danyar", "saber", "aprendre", "sortir",
                "escoltar", "viure", "mirar", "perdre", "fer", "necessitar", "obrir", "tancar", "organitzar", "pagar", "jugar",
                "posar", "ploure", "llegir", "respondre", "córrer", "dir", "veure", "vendre", "enviar", "signar", "cantar", "seure",
                "dormir", "fumar", "parlar", "lletrejar", "gastar", "posar-se dret", "començar", "estudiar", "tenir èxit",
                "nedar", "prendre", "parlar", "ensenyar", "dir", "pensar", "traduir", "viatjar", "intentar", "apagar", "encendre",
                "tipus", "entendre", "utilitzar", "esperar", "despertar", "voler", "mirar", "treballar",
                "preocupar-se", "escriure"];

//Variable on es guardaran els valors random per mostrar una paraula.
var random;

//Paraules correctes i fallades.
var paraulesok = 0;
var parauleserror = 0;

//Primera funció a executar.
function inici(){
  numRandom();
  document.getElementById("contenidor-label").innerHTML = "<label id='paraulaAng'>"+ verbsAng[random].toUpperCase(); +"</label>";
}

//Calcular un número aleatori per escollir una paraula.
function numRandom(){
  random = Math.floor((Math.random() * 90) + 1);
}

//Cridada des del botó acceptar una vegada has introduit el verb en el textbox en castellà.
function validar(){
  var sortir = false;

  document.getElementById("resultat").style.display = "inline-block";

  if(document.getElementById("textbox").value == verbsCat[random].toLowerCase()){
    document.getElementById("resultat").innerHTML = "<h1 id='labelAnunci'>Perfect!</h1>";
    sortir = true;
    paraulesok++;
    document.getElementById("paraulesok").innerHTML = "<h1 id='labelAnunci'>Numero de paraules correctes: " + paraulesok + ".";
  }else{
    document.getElementById("resultat").innerHTML = "<h1 id='labelAnunci'>Error! Torna a intentar-ho.</h1>";
    document.getElementById("resposta").style.display = "inline-block";
    parauleserror++;
    document.getElementById("parauleserror").innerHTML = "<h1 id='labelAnunci'>Numero de paraules fallades: " + parauleserror + ".";
  }

  if(sortir == true){
    sortir = false;
    inici();
    document.getElementById("textbox").value = "";
    setTimeout(function(){ document.getElementById("resultat").style.display = "none";}, 1500);
  }
}

//Dona la resposta de la pregunta.
function resposta(){
  document.getElementById("resultat").innerHTML = "<h1 id='labelAnunci'>La resposta es '"+ verbsCat[random] + "'.</h1>";
  setTimeout(function(){ document.getElementById("resultat").style.display = "none";}, 2000);
  document.getElementById("resposta").style.display = "none";

  document.getElementById("textbox").value = "";
  setTimeout(function(){ inici()}, 2000);
}


/*Contador de segons
function contadorSegons(){
  var contadors = 0;
  contadors++;
  setTimeout(function(){ document.getElementById("contador").value = contadors}, 1000);
}*/


