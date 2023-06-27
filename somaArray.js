export function somaArray(array) {
    let soma = array.reduce((total, number) => total += number, 0)
    alert(`The sum of all the elements of the array is: ${soma}.`)

    console.log(`A soma dos elementos do array é: ${soma}`)

    return soma
}