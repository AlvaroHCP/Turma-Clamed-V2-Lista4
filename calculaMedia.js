export function calculaMedia(array) {
    // console.log("funciona calculaMedia.")
    let average = array.reduce((total, number, index, array) => {
        if (index === array.length - 1) {
            total += number
            return total / array.length
        } else {
            return total += number
        }
    }, 0)

    alert(`The average of all the elements of the array is: ${average}.`)
    // console.log(soma / array.length)
    return average
}

