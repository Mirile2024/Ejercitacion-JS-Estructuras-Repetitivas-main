// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

const prompt = require('prompt-sync')({ siging: true })
let A = parseInt(prompt('Ingrese el valor para A: '))
let B = parseInt(prompt('Ingrese el valor para B: '))
let resto = 0
// recordar que lo siguiente es para descartar un numero negativo y convertirlo a positivo( -*- = +)
if (B < 0) {
    B *= -1
  }
  if (A < 0) {
    A *= -1
  }
  
while (A >= B) {
  A = A - B
  resto++
  console.log(`el resultado de la division es: ${A}`)
}
    console.log(`El resto de la division es: ${A}`)
