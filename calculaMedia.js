export function calculaMedia(array) {
    // console.log("funciona calculaMedia.")
    let average = array.reduce((total, number, index, array) => {
        if (index === array.length - 1) {
            total += number
            total /= array.length
            let decimalDigits = 2
            let numberDecimalDigits = total.toString().split(".")[1].length
            // console.log(`The average has ${numberDecimalDigits} decimal digits.`)

            if (numberDecimalDigits > decimalDigits) {
                total = total.toFixed(2)
            }

            return total
        } else {
            return total += number
        }
    }, 0)

    alert(`The average, up to 2 decimal digits, of all the elements of the array is: ${average}.`)
    // console.log(soma / array.length)

    console.log(`A media, com 2 casas decimais, dos elementos do array é: ${average}`)

    return average
}

