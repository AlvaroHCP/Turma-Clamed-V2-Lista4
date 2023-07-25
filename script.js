class Veiculo {
    constructor(marca, ano) {
        this.marca = marca
        this.ano = ano
    }

    get obterDetalhes() {
        console.log(`Marca: ${this.marca}
Ano: ${this.ano}`)
    }
}

// let teste = new Veiculo("Ford", 2021)
// teste.obterDetalhes

class Carro extends Veiculo {
    constructor(marca, ano, portas) {
        super(marca, ano)
        this.portas = portas
    }

    get obterDetalhes() {
        console.log(`Marca: ${this.marca}
Ano: ${this.ano}
Portas: ${this.portas}`)
    }
}

let teste2 = new Carro("Honda", 2023, 4)
teste2.obterDetalhes