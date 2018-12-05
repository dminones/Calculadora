// Declaración de estado de la aplicación

var display = '';
var valorAnterior = ''
var operacion;


// Funciones que se ejecutan via botones del html

function presionarNumero(numero){
    display += numero
    actualizarDisplay()
}

function presionarAC() {
    display = ''
    actualizarDisplay()
}

function resolver() {
    var resultado;
    switch (operacion) {
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(display)
            break;
        case '-':
            resultado = parseFloat(display) - parseFloat(valorAnterior)
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
     console.log("presionar igual")
    display = parseFloat(display);
    resolver();
    operacion = '';
    actualizarDisplay();
 }

 function actualizarDisplay(){
    $('#display').html(display)
}

 $( document ).ready(function() {
    console.log( "ready!" );

    

    actualizarDisplay();
    
    $('.operadores--basicos button').click(function (){
        var operacion = $(this).html()
        console.log("click", operacion)
        if(operacion !== '=') { 
            presionarOperacion(operacion)
        } else {
            presionarIgual()
        }
    })
});
