class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    get obterInformacoes() {
        console.log(`Livro de Título: ${this.titulo}
Autor: ${this.autor}
Ano de Publicação: ${this.anoPublicacao}`)
    }
}

let livro1 = new Livro("O poder do hábito", "Charles Duhigg", 2012)
let livro2 = new Livro("Mentes Extraordinárias", "Alberto Dell’Isola", 2021)
let livro3 = new Livro("Quando ninguém está olhando", "Alyssa Cole", 2021)

console.log(livro1)
console.log(livro2)
console.log(livro3)