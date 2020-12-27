const rockets = [
    { pais: "Brasil", lancamentos: 32},
    { pais: "Russia", lancamentos: 10},
    { pais: "EUA", lancamentos: 15},
    { pais: "Japao", lancamentos: 20},
]


// Parametros utilizados na funçao reduce() - Elemento anterior, elemento, valor inicial começa em 0
const totalLancamentos = rockets.reduce( (elementoAnterior, elemento) => elementoAnterior + elemento.lancamentos, 0)

// console.log(totalLancamentos)

// =================================
// OUTRO EXEMPLO MANEIRA ANTIGA
const numeros = [2, 3, 8, 63, 100,]
let soma = 0

for (let i = 0; i < numeros.length; i ++) {
    soma += numeros[i]
}

// console.log(soma)

// =================================
// OUTRO EXEMPLO MANEIRA NOVA


// Importancia dos parâmetros, vai somar todos os elementos do array e no fim vai subtrair por -10
const somarNumeros = numeros.reduce( (valorAcumulador, elemento) => valorAcumulador +=  elemento, -10)
// console.log(somarNumeros)

// Outro exemplo
const pessoas = [
    {nome: "Fulano", idade: 22},
    {nome: "Ciclano", idade: 45},
    {nome: "Jose", idade: 15},
    {nome: "Adriano", idade: 10},
]

const menoresIdade = pessoas.reduce( function (valorAcumalado, elemento) {
    elemento.idade
}, { maiores: [], menores: [] })

console.log(menoresIdade)