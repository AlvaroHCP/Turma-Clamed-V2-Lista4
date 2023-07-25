function somaImpares(array) {
    let somaImpares = array.reduce((total, n) => {
        if (n % 2 != 0) {
            return total += n
        } else {
            return total
        }
    }, 0)

    return somaImpares
}

export default somaImpares