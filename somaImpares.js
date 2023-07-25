function somaImpares(array) {
    let somaImpares = array.reduce((total, n) => {
        if (n % 2 != 0) {
            return total += n
        }
    }, 0)

    return somaImpares
}

export default somaImpares