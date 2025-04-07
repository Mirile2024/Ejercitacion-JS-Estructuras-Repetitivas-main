// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.

const prompt = require('prompt-sync')({ siging: true })
let A = parseInt(prompt('Ingrese el primer valor: '))
let B = parseInt(prompt('Ingrese el segundo valor: '))
let multiplicacion = 0
let negativo = false
if (B < 0) {
    B *= -1
    negativo = !negativo
  
  }
  if (A < 0) {
    A *= -1
    negativo = !negativo
  }
  let resultado=A
  let ciclo =--B
  for (let i = 0; i < ciclo; i++) {
      multiplicacion = resultado * A
      console.log({ multiplicacion })
      resultado= multiplicacion
    }
    if( 'A' * 'B' ){
      console.log(multiplicacion);
  }
  