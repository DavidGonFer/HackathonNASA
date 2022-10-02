
let numPregunta = 0;
let numAcertadas = 0;
let respuestas = ["James Webb", "Hubble", "Spitzer"];
let respuesta ="";  
let imagenes = ["../../IMG/1aPregunta.jpg","../../IMG/2aPregunta.webp","../../IMG/3aPregunta.jpg"];
function mostrar(element){
    document.getElementById(element).style.visibility="visible";    
}

function checkear(){
    if(respuestas[numPregunta]==respuesta) numAcertadas++;
    numPregunta++;
    if(numPregunta>=respuestas.length) {
        ocultar("esconderResultado");
        ocultar("next");
        mostrar("resultado");
        mostrar("restart");
        mostrarAcertadas();
        
    }
    else {
        cambiarImagen();
        quitarSeleccionado("hubble");
        quitarSeleccionado("spitzer");
        quitarSeleccionado("jamesWebb");
        ocultar("next");
    }
}

function setRespuesta1(){
    mostrar("next");
    mostrarSeleccionado("jamesWebb");
    quitarSeleccionado("hubble");
    quitarSeleccionado("spitzer");
    respuesta = "James Webb";
}

function setRespuesta2(){
    mostrar("next");
    mostrarSeleccionado("hubble");
    quitarSeleccionado("jamesWebb");
    quitarSeleccionado("spitzer");
    respuesta = "Hubble";
}

function setRespuesta3(){
    mostrar("next");
    mostrarSeleccionado("spitzer");
    quitarSeleccionado("jamesWebb");
    quitarSeleccionado("hubble");
    respuesta = "Spitzer";
}

function mostrarAcertadas(){
    document.getElementById("resultado").innerHTML = numAcertadas;
}

function cambiarImagen(){
    document.getElementById("img").src=imagenes[numPregunta];
}

function ocultar(elemento){
    document.getElementById(elemento).style.visibility="hidden";
}

function mostrarSeleccionado(element){
    document.getElementById(element).style.backgroundColor="rgba(55, 95, 215, 1)";  
}

function quitarSeleccionado(element){
    document.getElementById(element).style.backgroundColor="rgba(65, 105, 225, 0.7)";     
}