// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.
const prompt = require('prompt-sync')({ siging: true })

// 6/ 3 = 6 - 3 - 3

let numero1 = parseInt(prompt('Ingrese el primer numero: '))
let numero2 = parseInt(prompt('Ingrese el segundo numero: '))
let contar = 0

while (numero1 >= numero2) {
  numero1 = numero1 - numero2
  contar++
}
console.log(`el resultado de la division es ${contar}`)
console.log(`el resto de la division es ${numero1}`)