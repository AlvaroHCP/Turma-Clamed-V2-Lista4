import { calculaMedia } from "./calculaMedia.js";
import { multiplicaArray } from "./multiplicaArray.js";
import { somaArray } from "./somaArray.js";

let User = prompt("Insert the array. (Separate the numbers by \",\")")
let arrayUser = (User.split(",")).map(x => Number(x.trim()))

// let arrayUser = ("5,2,13,4,9".split(",")).map(x => Number(x))

alert(`The typed array is [${arrayUser}]`)
console.log(`O array digitado é: [${arrayUser}]`)

let sum = somaArray(arrayUser)
let average = calculaMedia(arrayUser)
let product = multiplicaArray(arrayUser)

$("section").append(`<h1 style="font-family:TimesNewRoman; text-align: center; margin-top: 150px; color: red; ">Array: [${arrayUser}]</h1>`)
$("ul").append(`<li style=\"margin-top: 50px; color: purple; \">Soma dos elementos: <br>${sum}</li>`)
$("ul").append(`<li style="margin-top: 50px; color: green; ">Média, com 2 casas decimais: <br>${average}</li>`)
$("ul").append(`<li style="margin-top: 50px; color: blue; ">Produto dos elementos: <br>${product}</li>`)

// $("body").append("<button style=\"background-color: red; width: 100px; height: 40px; text-align: center;\" href=\"./\">Reiniciar</button>")