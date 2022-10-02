
let numPregunta = 0;
let numAcertadas = 0;
let respuestas = ["James Webb", "Hubble", "Spitzer"];
let respuesta ="";
function habilitarBoton(){
    document.getElementById("next").style.visibility="visible";    
let imagenes = ["../../IMG/1aPregunta.jpg","../../IMG/2aPregunta.webp","../../IMG/3aPregunta.jpg"];
function mostrar(element){
    document.getElementById(element).style.visibility="visible";    
}

function checkear(){
    if(respuestas[numPregunta]==respuesta) numAcertadas++;
    numPregunta++;
}
    if(numPregunta>=respuestas.length) mostrarAcertadas();
    if(numPregunta>=respuestas.length) {
        ocultar("esconderResultado");
        mostrar("resultado");
        mostrar("restart");
        mostrarAcertadas();
        
    }
    else {
        cambiarImagen();
        ocultar("next");
    }
}

function setRespuesta1(){
    mostrar("next");
    respuesta = "James Webb";
}

function setRespuesta2(){
    mostrar("next");
    respuesta = "Hubble";
}

function setRespuesta3(){
    mostrar("next");
    respuesta = "Spitzer";
}

function mostrarAcertadas(){
    document.getElementById("resultado").innerHTML = numAcertadas;
}


function ocultar(elemento){
    document.getElementById(elemento).style.visibility="hidden";
}

