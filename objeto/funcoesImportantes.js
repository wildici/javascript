const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true, //vai ser ou nao listada, por ex no keys
    writable: false, //não permite ser modificada
    value: "01/01/2019" 
})

pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assgn (ECMASCRIPT 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, d: 4 }
const objFinal = Object.assign(destino, o1, o2) //concatenação

console.log(objFinal)

Object.freeze(objFinal) //congela os atributos do objeto
objFinal.c = 1234

console.log(objFinal)