function soma () {
	let soma = 0

	for (i in arguments) {
		soma += arguments[1]
	}
	return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,3))
console.log(soma(1, 31, 61, 9))