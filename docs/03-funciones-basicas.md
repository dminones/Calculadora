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

### Ejercicios propuestos

#### Completar las demas operaciones
Las demás operaciones pueden resolverse de manera análoga.

#### Evitar borrar display al presionar operacion 
Como podemos hacer para no borrar el display hasta que el usuario empieza a tipear el nuevo numero?
Pista: necesitamos una variable booleana para saber que la proxima vez hay que empezar un numero de cero.

#### Guardar el estado como numero y no string.
Que pasa al hacer la cuenta si tenemos un valor invalido? Ejemplo un numero con multiples "."
Una calculadora tradicional no deja tipear un valor inválido. Como podríamos resolver esto? 

#### Si hay una operacion en curso que deberia pasar al presionar una operación?
