// Forma literal
function nome () {}

//Armazenando em uma variável
let f = function () {}

//Armazenando em um array
let array = [function () {}]

//Armazenar em um atributo de objeto
let obj = {}
obj.falar = function () {return 'opa'}

console.log(obj.falar())

//Passar função como param
function executar(run) {
	run()
}

run(function () {
	console.log('Executando...')
})

//Função pode retornar/conter uma função
function soma(a, b) {
	return function (c) {
		console.log(a + b + c)
	}
}

soma(2,3)(2)