// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.
const prompt = require("prompt-sync")();
// const prompt = require('Ingresar valor')()
let valor;
let suma = 0;
let interacion = 1;
do{
    let valorUsuario= prompt ('Ingresar valor: ')
    valor = parseInt(valorUsuario)
    suma += valor
    interacion ++
}while (valor > 0)
    const promedio = suma / interacion
    console.log(promedio);
