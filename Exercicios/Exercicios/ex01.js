const parImpar = (a, b) =>
 {

    if(a%2==0 && b%2==0)

        return 'sao pares'

    else (a%2==0 && b%2==!0)

        return `${a} é par, e ${b} é impar.`
}
console.log(parImpar(10,17))