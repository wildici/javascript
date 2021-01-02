//coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = "Cadeira"
produto["marca do produto"] = "generica"
produto.preco = 220

//console.log(produto)

delete produto.preco
delete produto["marca do produto"]

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56
    },
    condutores: [{
        nome: "Jr",
        idade: 19
    },{
        nome: "Fulano",
        idade: 56
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

console.log(carro)