
// function pessoa(nome, idade, turma){
//     var obj = {}
//     obj.nome = nome
//     obj.idade = idade
//     obj.turma = turma
//     obj.saudacao = function(){
//         console.log(`Olá! Me chamo: ${obj.nome}`)
//     }

//     return obj
// }

// const pessoa1 = pessoa("Wildici", 26, "B")
// const pessoa2 = pessoa("Pedro", 20, "C")


// pessoa1.endereco = "Rua da armonia"

// console.log(pessoa1)
// console.log(pessoa2)
// pessoa1.saudacao()

const numeros = [2, 4, 6, 7, 8, 10, 13]

const dobrar = e => e * 2
const numerosPares = e => e % 2 === 0
const exp = e => e ** 2

const soma = (acumulador, elemento) => acumulador += elemento


const resultado = numeros.map(dobrar)
const resultado2 = numeros.filter(numerosPares)
const resultado3 = numeros.map(exp)
const resultado4 = numeros.reduce(soma)

console.log(numeros)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4 / numeros.length)

function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return parseInt(soma / arguments.length)
}

var arr = [2, 4, 6, 7, 8, 10, 13]
console.log(somar.apply(null, arr));