
let index = 0

let alunos = [{
    nome: "Ronaldo",
    nota1: 5.7,
    nota2: 7.3
}, {
    nome: "Marcelle",
    nota1: 9.7,
    nota2: 8.4
}, {
    nome: "Patrick",
    nota1: 8.9,
    nota2: 7.1
}, {
    nome: "Jeane",
    nota1: 6.8,
    nota2: 9.3
}]

console.log("Para os alunos \n", alunos)
// console.log(`\n\nPara o(a) aluno(a) de índice ${index}\n\nNome: ` + alunos[index].nome, "\nNota 1: " + alunos[index].nota1, "\nNota 2: " + alunos[index].nota2 + "\n\n")


let mediaAlunos = alunos.map((student) => {
    let average = (student.nota1 + student.nota2) / 2
    return [average, student.nome]
})

// console.log(mediaAlunos.sort().reverse())

let mediaFinal = mediaAlunos.sort().reverse().map((total) => {
    return total.reverse()
})

console.log("\n\nA lista em ordem decrescente de médias fica: \n\n", mediaFinal)