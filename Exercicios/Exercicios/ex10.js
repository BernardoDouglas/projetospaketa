let numero1, numero2, resto

function sobra(numero1, numero2) {
     if(numero1 <= 0 || numero2 <= 0){
          console.log('digite novamente')
     }else
          resto = numero1 % numero2
          console.log(`O resto da divisao entre o ${numero1} e ${numero2} é: ${resto}`)
}

sobra(20,15)