function filtrarPares(array) {
    pares = array.filter(n => n % 2 === 0)

    return pares
}

export default filtrarPares