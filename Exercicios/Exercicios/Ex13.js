let valor =157;
const notas =[100, 50, 10, 5, 1];
console.log(valor)

for(let nota of notas){
    let nNotas = parseInt(valor / nota);
    console.log ('${nNotas} nota de  ${notas}' )
    valor = valor % notas;
}

