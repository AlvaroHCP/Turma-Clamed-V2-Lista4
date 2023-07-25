import somaImpares from "./somaImpares.js"
import filtrarPares from "./filtrarPares.js"

let lista = prompt("Insira uma lista de números. \n")
let array = lista.split(",").map(n => Number(n))

console.log(filtrarPares(array) + "\n")
console.log(somaImpares(array))
console.log

alert(`Números pares: [${filtrarPares(array)}]
Soma dos números ímpares: ${somaImpares(array)}`)
