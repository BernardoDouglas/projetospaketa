function LocalizarMaior(numero){
    var max = numero[0];
    for(var i = 0; i < numero.length; i++){

        if(numero[i] > max){
            max = numero[i]
        }

    }
    return max;
}

var numero = [10,20,8,12,14,59];
var max = LocalizarMaior(numero);
console.log("Maior Numero ", max);
