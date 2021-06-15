let = numero= []

function arrayRandom(){

    for (c=1; c<=10; c++){ 

        let n1 = Math.floor(Math.random() * 100 + 1)

        numero.push(n1)

    }
    numero.sort((a, b) => {
        if (a < b) return -1
    })

 return `recebendo numero' ${numero} 

 numero maior ${numero[9]}`


}
console.log(arrayRandom())