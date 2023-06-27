import { calculaMedia } from "./calculaMedia.js";
import { multiplicaArray } from "./multiplicaArray.js";
import { somaArray } from "./somaArray.js";

// let User = prompt("Insert the array.")
// let arrayUser = (User.split(",")).map(x => Number(x))

let arrayUser = ("5,2,13,4,9".split(",")).map(x => Number(x))

alert(arrayUser)

somaArray(arrayUser)
calculaMedia(arrayUser)
multiplicaArray(arrayUser)