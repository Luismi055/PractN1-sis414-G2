let numeros = [5,10,6,10];
let resultado = sumar(numeros);
console.log("La suma de los números es:", resultado);
function sumar(numeros){
    let suma = 0;
    for(let elnumero of numeros){
        suma += elnumero;
    }
    return suma;
}

