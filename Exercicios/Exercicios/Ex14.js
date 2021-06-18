const acrescimo = (IPI, valor1, quant1, valor2, quant2 ) =>{
    
    let valor = (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

    console.log(`O valor total é ${valor.toFixed(2)}`)

}
acrescimo(8, 20, 12, 70, 2)