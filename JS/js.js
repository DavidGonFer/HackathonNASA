
let numPregunta = 0;
let numAcertadas = 0;
let respuestasFacil = ["James Webb", "Hubble", "Spitzer"];
let respuestasMedio = [""];
let respuestasDificil=[""];
let respuesta ="";  
let imagenesFacil = ["../../IMG/1aPregunta.jpg","../../IMG/2aPregunta.webp","../../IMG/3aPregunta.jpg"];
let imagenesNormal = [["",""],];
let imagenesDificil = [["","","",""],];
function mostrar(element){
    document.getElementById(element).style.visibility="visible";    
}

function checkearFacil(){
    if(respuestasFacil[numPregunta]==respuesta) numAcertadas++;
    numPregunta++;
    if(numPregunta>=respuestasFacil.length) {
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

function checkearNormal(){
    if(respuestasMedio[numPregunta]==respuesta) numAcertadas++;
    numPregunta++;
    if(numPregunta>=respuestasMedio.length) {
        ocultar("esconderResultado");
        ocultar("nextM");
        mostrar("resultado");
        mostrar("restart");
        mostrarAcertadas();
        
    }
    else {
        cambiarImagenesNormal();
        quitarSeleccionado("yes");
        quitarSeleccionado("no");
        ocultar("nextM");
    }
}

function setRespuestaFacil1(){
    mostrar("next");
    mostrarSeleccionado("jamesWebb");
    quitarSeleccionado("hubble");
    quitarSeleccionado("spitzer");
    respuesta = "James Webb";
}

function setRespuestaFacil2(){
    mostrar("next");
    mostrarSeleccionado("hubble");
    quitarSeleccionado("jamesWebb");
    quitarSeleccionado("spitzer");
    respuesta = "Hubble";
}

function setRespuestaFacil3(){
    mostrar("next");
    mostrarSeleccionado("spitzer");
    quitarSeleccionado("jamesWebb");
    quitarSeleccionado("hubble");
    respuesta = "Spitzer";
}

function setRespuestaNormal1(){
    mostrar("nextM");
    mostrarSeleccionado("yes");
    quitarSeleccionado("no");
}

function setRespuestaNormal2(){
    mostrar("nextM");
    quitarSeleccionado("yes");
    mostrarSeleccionado("no");   
}

function mostrarAcertadas(){
    document.getElementById("resultado").innerHTML = numAcertadas;
}

function cambiarImagen(){
    document.getElementById("img").src=imagenesFacil[numPregunta];
}

function cambiarImagenesNormal(){
    document.getElementById("imgDif1").src=imagenesNormal[numPregunta][0];   
    document.getElementById("imgDif2").src=imagenesNormal[numPregunta][1];   

}

function cambiarImagenesDificil(){
    document.getElementById("imgDif1").src=imagenesNormal[numPregunta][0];   
    document.getElementById("imgDif2").src=imagenesNormal[numPregunta][1];   

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