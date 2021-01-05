//fetch: solução moderna para fazer requisições ajax no browser
//await: só pode ser usada dentro de uma função async
//await: até obter um retorno (uma resposta), tudo o que estiver abaixo do await não sera executado

//link utilizado como exemplo: https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1

let page = 1

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    const data = await response.json()

    //const first = data[0]
    console.log(data)
    //return data
}

getPosts()