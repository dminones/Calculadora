
function comparar(a,b) {
    var esMayor =  a > b 
    if(esMayor) {
        return 1;
    } else {
        if(a < b) {
            return -1;
        } else {
            return 0;
        }
    }
}

function compararElseIf(a,b) {
    if( a > b ) {
        return 1;
    } else if(a < b) {
        return -1;
    } else {
        return 0;
    }
}

console.log(comparar(1,2)) // -1
console.log(comparar(1,1)) // 0
console.log(comparar(2,1)) // 1

console.log(compararElseIf(1,2)) // -1
console.log(compararElseIf(1,1)) // 0
console.log(compararElseIf(2,1)) // 1