export function somaArray(array) {
    console.log("funciona somaArray.")
    let soma = array.reduce((total, number) => total += number, 0)
    alert(`The sum of all the elements of the array is: ${soma}.`)
    return soma
}