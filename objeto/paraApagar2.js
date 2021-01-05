const pessoa = {
    nome: "Fulano",
    idade: 18
}

Object.preventExtensions(pessoa)

pessoa.nome = "Ciclano"
pessoa.endereco = "rua"
delete pessoa.idade

console.log(Object.isExtensible(pessoa))