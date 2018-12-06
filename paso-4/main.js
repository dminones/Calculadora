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
 
 function presionarOperacion(operacion) {
    calculadora.operacionPendiente(operacion)
    actualizarDisplay();
 }
