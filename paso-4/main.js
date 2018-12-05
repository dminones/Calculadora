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

function presionarPorcentaje() {
    console.log("presionarPorcentaje",display)
    display = (parseFloat(display) * 0.1).toString()
    actualizarDisplay()
}

function presionarSigno() {
    display =  (-parseFloat(display)).toString()
    actualizarDisplay()
}

function resolver() {
    var resultado;
    switch (operacion) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(display);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(display);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(display);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(display);
            break;
        default:
            console.log("operacion no soportada")
            break;
    }
    display = resultado.toString()
}

function presionarIgual() {
    resolver()
    actualizarDisplay()
}

function presionarAC() {
    display = '';
    valorAnterior = '';
    operacion ='';
    actualizarDisplay();
 }
 
 function presionarOperacion(operacionSelccionada) {
    if (!(display === '' && valorAnterior === '')) {
        valorAnterior = parseFloat(display);
        display = '';
        operacion = operacionSelccionada;
        actualizarDisplay();
    }
 }
 
 function presionarIgual() {
    display = parseFloat(display);
    resolver();
    operacion = '';
    actualizarDisplay();
 }