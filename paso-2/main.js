var display = '';
var valorAnterior = ''

window.onload = function() {
    actualizarDisplay();
}

function actualizarDisplay(){
    document.getElementById("display").innerHTML = display
}

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