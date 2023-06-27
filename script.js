import { calculaMedia } from "./calculaMedia.js";
import { multiplicaArray } from "./multiplicaArray.js";
import { somaArray } from "./somaArray.js";

let User = prompt("Insert the array. (Separate the numbers by \",\")")
let arrayUser = (User.split(",")).map(x => Number(x.trim()))

// let arrayUser = ("5,2,13,4,9".split(",")).map(x => Number(x))

alert(`The typed array is [${arrayUser}]`)

somaArray(arrayUser)
calculaMedia(arrayUser)
multiplicaArray(arrayUser)