const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: true},
    {nome: "Maria", nota: 5.3, bolsista: true},
    {nome: "Pedro", nota: 9.3, bolsista: false}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))