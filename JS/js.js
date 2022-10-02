
let numPregunta = 0;
let numAcertadas = 0;
let respuestas = ["James Webb", "Hubble", "Spitzer","James Webb","Hubble", "Spitzer"];
let respuesta ="";  
let imagenes = ["../../IMG/1aPregunta.jpg","../../IMG/2aPregunta.webp","../../IMG/3aPregunta.jpg","../../IMG/jameswebbMed2.png","../../IMG/hubbleMid1.jpg","../../IMG/spitzerMed1.jpg"];
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
    document.getElementById("resultado").innerHTML ="You have: "+ numAcertadas+" correct answers!";
}

function cambiarImagen(){
    document.getElementById("img").src=imagenes[numPregunta];
}

function ocultar(elemento){
    document.getElementById(elemento).style.visibility="hidden";
}










/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
	e.target.style.opacity = ''; // Restaura la opacidad del elemento			
	e.dataTransfer.clearData("Data");			
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
	return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
	if ((e.target.className == "contenedorPieza") || (e.target.id == "contenedorPiezas"))
		return false;
	else
	return true;
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
	comprobarPuzzle();
}

function comprobarPuzzle(){
	if((document.getElementById('pieza1').parentNode.id=='uno') &&
		(document.getElementById('pieza2').parentNode.id=='dos') &&
		(document.getElementById('pieza3').parentNode.id=='tres') &&
		(document.getElementById('pieza4').parentNode.id=='cuatro'))
	{
		alert('AQUI INTRODUCE EL MOSTRAR BOTON Y SIGUIENTE PUZZLE');
	}
}

/**
* Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
**/
function comprobarnavegador() {
	if( 
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
	}

}
function mostrarSeleccionado(element){
    document.getElementById(element).style.backgroundColor="rgba(55, 95, 215, 1)";  
}

function quitarSeleccionado(element){
    document.getElementById(element).style.backgroundColor="rgba(65, 105, 225, 0.7)";     
}
