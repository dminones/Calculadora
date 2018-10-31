
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
