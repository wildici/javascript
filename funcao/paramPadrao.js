function soma (a, b, c) {
	a = a || 1
	b = b || 1
	c = c || 1

	return a + b + c
}

console.log(soma())

function soma2 (a, b, c) {
	a = a !== undefined ? a : 1
}

//Valor padrão do ES2015

function soma3 (a = 1, b = 1, c = 1) {
	return a + b + c
}
