// Declaración de estado de la aplicación
var calculadora = {
    display: '',
    valorAnterior: '',
    operacion: null,
    valorActual: function() {
        return parseFloat(this.display)
    },
    limpiar: function() {
        this.display = '';
    },
    agregarNumero: function(numero){
        this.display += numero
    },
    calcularPorcentaje: function() {
        this.display = (this.valorActual() * 0.1).toString()
    },
    cambiarSigno: function() {
        this.display =  (-this.valorActual()).toString()
    },
    puedoAgregarOperacion: function () {
        return !(this.display === '' && this.valorAnterior === '')
    },
    operacionPendiente: function(operacion) {
        if (this.puedoAgregarOperacion()) {
            this.valorAnterior = this.valorActual();
            this.display = '';
            this.operacion = operacion;
        }
    },
    resolver: function () {
        var resultado;
        switch (this.operacion) {
            case '+':
                resultado = this.valorAnterior + this.valorActual();
                break;
            case '-':
                resultado = this.valorAnterior - this.valorActual();
                break;
            case '*':
                resultado = this.valorAnterior * this.valorActual();
                break;
            case '/':
                resultado = this.valorAnterior / this.valorActual();
                break;
            default:
                console.log("operacion no soportada")
                break;
        }
        this.operacion = '';
        this.display = resultado.toString()
    }
}

window.onload = function() {
    actualizarDisplay();
}

function actualizarDisplay(){
    document.getElementById("display").innerHTML = calculadora.display
}

// Funciones que se ejecutan via botones del html
function presionarNumero(numero){
    console.log("numero",numero)

    calculadora.agregarNumero(numero)
    actualizarDisplay()
}

function presionarPorcentaje() {
    calculadora.calcularPorcentaje()
    actualizarDisplay()
}

function presionarSigno() {
    calculadora.cambiarSigno()
    actualizarDisplay()
}
 
function presionarIgual() {
    calculadora.resolver();
    actualizarDisplay();
}

function presionarAC() {
    calculadora.limpiar()
    actualizarDisplay();
}

function crearBoton(texto, data) {
    var contenedor = $("<div />").addClass("boton-container")
    var boton = $("<button />")
    boton.addClass("boton")
    boton.attr('data-numero', data)
    boton.html(texto)
    contenedor.append(boton)
    return contenedor
}

$(document).ready(function(){
    $("#boton-ac").click(presionarAC)
    $("#boton-signo").click(presionarSigno)
    $("#boton-porcentaje").click(presionarPorcentaje)

    $(".operadores--basicos button").click(function(e){
        var operacion = $(this).data('operacion')
        if(operacion == '=') {
            presionarIgual()
        } else {
            presionarOperacion(operacion)
        }
    })
    var $contenedorNumeros = $(".operadores--numeros")

    for(var i=9; i>=0;i--) {
        var botonNumero = crearBoton(i,i)
        $contenedorNumeros.append(botonNumero)
    }

    $(".operadores--numeros button").click(function(e){
        var numero = $(e.target).data('numero')
        presionarNumero(numero)
    })
})
 
function presionarOperacion(operacion) {
    console.log("operacion",operacion)
    calculadora.operacionPendiente(operacion)
    actualizarDisplay();
}
