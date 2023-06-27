export function calculaMedia(array) {
    // console.log("funciona calculaMedia.")
    let soma = array.reduce((total, number) => total += number, 0)
    alert(soma / array.length)
    // console.log(soma / array.length)
}

