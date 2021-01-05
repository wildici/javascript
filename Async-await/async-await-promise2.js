const aPromise = new Promise( (resolve, reject) => {
    const number = 37
    resolve(number)
    //reject(number)
} )

aPromise
    .then( value => value )
        .then( value => {
            console.log(value)
        })
        .catch(rejectValue => {
            console.log({rejectValue})
        })