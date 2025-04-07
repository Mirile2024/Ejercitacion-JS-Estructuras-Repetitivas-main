// Ejercicio 5
// Imprimir los números pares desde N (siendo N un número par que se lee) en forma descendente
// hasta 2.
const prompt = require('prompt-sync')({ siging: true })
let N = parseInt(prompt('Ingrese el Número:'))
if (N % 2 !== 0) N--
for( let i = N; i >= 2; i -= 2){
    console.log({i});
}