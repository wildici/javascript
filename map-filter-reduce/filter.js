// filter() = remover elementos

const array = [2, 63, 8, 41, 2]

const verificarElementosDuplicados = array.filter( (elem, index, arr) => arr.indexOf(elem) === index )

console.log(verificarElementosDuplicados)