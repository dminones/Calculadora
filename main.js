
var resultado = 0;
function actualizarResultado() {
    document.getElementById("resultado").innerHTML = resultado;
}
actualizarResultado();

function reset() {
    resultado = 0;
    actualizarResultado();
}

function sumar(a,b){
    return a + b;
}

function sumarDosNumeros() {
    var numeroA = parseInt(prompt("ingrese un numero"));
    resultado = sumar(resultado,numeroA);
    actualizarResultado();
}

var input = ""

function press(num) {
    input += num;
    actualizarInput()
}

function actualizarInput() {
    document.getElementById("input").value = input
    document.getElementById("input").innerHTML = input
}

function cambioInput(value) {
    console.log(value)
    input = value
}