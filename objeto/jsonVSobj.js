const obj = {
    a: 1,
    b: 2,
    c: 3
}

//Objeto -> JSON
console.log(JSON.stringify(obj))

//JSON -> Objeto
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d":{}, "e":[]}'))
