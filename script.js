class Veiculo {
    constructor(marca, ano) {
        this.marca = marca
        this.ano = ano
    }

    get obterInformacoes() {
        console.log(`Marca: ${this.marca}
Ano: ${this.ano}`)
    }
}

let teste = new Veiculo("Ford", 2021)
teste.obterInformacoes