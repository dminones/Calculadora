# Calculadora Javascript - Funciones Básicas

El próximo paso es agregar las funciones básicas.

## Sumar

Al presionar sumar (o cualquier operacion básica) lo que tiene que pasar es que la proxima vez que apretemos un numero tiene que empezar un numero nuevo (y no concatenar)

### Primer aproximación

Guardar el valor en una nueva variable y borrar el input.

```javascript
// En la declaracion de variables
var valorAnterior = ''
...

// En las funciones
function presionarSuma() {
    valorAnterior = display;
    display=''
    actualizarDisplay()
}

// En las funciones
function presionarIgual() {
    display=Number(valorAnterior) + Number(display)
    actualizarDisplay()
}
```


