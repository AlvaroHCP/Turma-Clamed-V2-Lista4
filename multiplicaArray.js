export function multiplicaArray(array) {
    // console.log("funciona multiplicaArray.")
    let product = array.reduce((total, number) => total *= number, 1)
    alert(`The product of all the elements of the array is: ${product}.`)
    return product
}