function sacar(valor){
    if(valor % 10 ==0){
        while(valor >=100){
            valor = valor - 100
            notas100++
        }
        while(valor >=50){
            valor = valor - 50
            notas50++
        }
        while(valor >=10){
            valor = valor - 10
            notas10++
        }
}else{
    console.log('Valor inválido. Insira um valor múltiplo de 10');
}
}
let notas100 = 0
let notas50 = 0
let notas10 = 0
console.log(sacar(380));
console.log(notas100);
console.log(notas50);
console.log(notas10);