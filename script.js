import { calculaMedia } from "./calculaMedia.js";
import { multiplicaArray } from "./multiplicaArray.js";
import { somaArray } from "./somaArray.js";

alert(calculaMedia(), multiplicaArray(), somaArray())

// let User = prompt("Insert the array.")

let arrayUser = ("5,2,13,4,9".split(",")).map(x => Number(x))

alert(arrayUser)