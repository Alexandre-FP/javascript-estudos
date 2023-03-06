//Se a minha condição encontrar uma verdadeira e se tiver mais linhas sendo verdadeira ela vai parar na primeira que for true

const numero = 7;

if (numero >= 0 && numero <= 5){
    console.log('Seu numero está entre 0 e 5');
}else if (numero >= 6 && numero <= 8){
    console.log('O numero esta entre 6 e 8');
}else if (numero >= 9 && numero <= 11 ){
    console.log('O numero esta entre 9 e 11');
} else{
   console.log('O nuemro não esta entre 0 e 11')
}