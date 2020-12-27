const arrayOriginal = [2, 4, 8, 16, 32, 33, 5]

const novoArray = arrayOriginal.filter(elemento => elemento % 2 === 0).map( elemento => elemento * 2)

console.log(arrayOriginal)
console.log(novoArray)