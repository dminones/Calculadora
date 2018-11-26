// Declaración de estado de la aplicación

var display = '';
var valorAnterior = ''
var operacion;

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
    operacion = '+'
    actualizarDisplay()
}

function resolver() {
    var resultado;
    switch (operacion) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(display)
            break;
    
        default:
            console.log("operacion no soportada")
            break;
    }
    display = resultado.toString()
}

function presionarIgual() {
    console.log("presionar igual")
    resolver()
    actualizarDisplay()
}