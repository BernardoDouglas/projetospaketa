const nivelPoluicao = (nivel) =>{
    if(nivel >= 0.5){
        console.log('todas as empresa devem suspender suas atividades')
    }else if(nivel == 0.4){
        console.log('industria do grupos 1 e 2 devem suspender suas atividades')
    }else if(nivel == 0.3){
        console.log('industria grupo 1 suspender as atividade')
    }else{
        console.log('Nível de poluição aceitável')
    }
}
nivelPoluicao(0.02)
nivelPoluicao(0.3)
