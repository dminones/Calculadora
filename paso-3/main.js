// Declaración de estado de la aplicación

var display = '';
var valorAnterior = ''

window.onload = function() {
    actualizarDisplay();
}

function actualizarDisplay(){
    document.getElementById("display").innerHTML = display
}

// Funciones que se ejecutan via botones del html

function presionarNumero(numero){
    display += numero
    actualizarDisplay()
}

function presionarAC() {
    display = ''
    actualizarDisplay()
}

function presionarSuma() {
    valorAnterior = display;
    display=''
    actualizarDisplay()
}

function presionarIgual() {
    var resultado = Number(valorAnterior) + Number(display)
    display = resultado.toString()
    actualizarDisplay()
}