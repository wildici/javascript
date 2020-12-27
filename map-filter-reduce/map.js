// Dobrar Valores de cada elemento do array sem utilizar a funçao map

const arrayOriginal = [2, 4, 8, 16, 32]
const arrayModificado = []

for (let i = 0; i < arrayOriginal.length; i ++) {
    arrayModificado.push(arrayOriginal[i] * 2)
}

// console.log(arrayOriginal)
// console.log(arrayModificado)

//====================== Dobrar Valores de cada elemento do array utilizando a funçao map
const numbers = [11, 5, 15, 43, 85, 2]

const multiplicarValores = numbers.map(element => element * 2 )

//console.log(typeof multiplicarValores)


//======================= Fahrenheit para celsius
const fahrenheit = [11, 32, 15, 43, 85, 2]

const celsius = fahrenheit.map( element => ((element - 32) * 5/9).toFixed(2) ) 

//console.log(celsius)

//========================
const nomes = ["Joao", "Maria", "JOSE"]

const nomesCaixaAlta = nomes.map( element => element.toLocaleLowerCase() )

console.log(nomesCaixaAlta)