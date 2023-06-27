export function somaArray(array) {
    console.log("funciona somaArray.")
    let soma = array.reduce((total, number) => total += number, 0)
    alert(soma)
}