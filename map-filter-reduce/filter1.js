const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const produtosFrageis = e => e.fragil === true
const produtosCaros = e => e.preco > 2000

console.log(produtos.filter(produtosFrageis).filter(produtosCaros))