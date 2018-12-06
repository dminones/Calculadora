# Calculadora Javascript - Objetos

Para aplicar lo que vimos de objetos vamos a extraer la logica de "negocio", es decir lo relacionado a mantener el estado de la calculadora y las cuentas que hace la calculadora a un objeto calculadora.
De esta forma separamos el modelo de el control de flujo de la aplicación y de la vista. 

El resultado es algo asi

```javascript
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
```

Esto tiene múltiples ventajas:

- Mantenemos todo el estado en una sola variable que tiene un punto comun. Hace mas dificil tener estos datos del estado desactualizados entre si.
- Vemos toda la logica de la calculadora en un solo lugar y no esparcido entre las diferentes funciones que controlan el flujo
- Podria cambiarse la visualizacion y usar este mismo objeto. Lo vimos desde la consola como podria usarse esto directamente.
- Podemos eliminar codigo duplicado como el parseFloat()