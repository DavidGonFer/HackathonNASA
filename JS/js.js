
let numPregunta = 0;
let numAcertadas = 0;
let respuestas = ["James Webb", "Hubble", "Spitzer"];
let respuesta ="";
function habilitarBoton(){
    document.getElementById("next").style.visibility="visible";    
}

function checkear(){
    if(respuestas[numPregunta]==respuesta) numAcertadas++;
    numPregunta++;
    if(numPregunta>=respuestas.length) mostrarAcertadas();
}

function setRespuesta1(){
    habilitarBoton();
    respuesta = "James Webb";
}

function setRespuesta2(){
    habilitarBoton();
    respuesta = "Hubble";
}

function setRespuesta3(){
    habilitarBoton();
    respuesta = "Spitzer";
}

function mostrarAcertadas(){
    document.getElementById("resultado").innerHTML = numAcertadas;
}


