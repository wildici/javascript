const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit de lápis", "preco": 41.45}',
    '{"nome": "Caneta", "preco": 7.45}',
]

//Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)

const preco = e => e.preco

const resultado = carrinho.map(paraObjeto).map(preco)

console.log(resultado)