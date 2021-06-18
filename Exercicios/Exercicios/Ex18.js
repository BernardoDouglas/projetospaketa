const notas = [2, 3, 5]
let soma = 0
let media = 0

for (let i = 0; i < notas.length; i++){
    soma += notas[i]
}

media = soma / notas.length;

console.log(soma)
console.log(media.toFixed(2));

