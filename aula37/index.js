// for classico - geralmente com iteraveis (array ou string)
// for in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (interaveis, arrays ou string)


const nome = ['Ale', 'Luiz'];


for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('##############');

for (let i in nome){
    console.log(nome[i]);
}

console.log('##############');

for (let valor of nome){ /*diferente do for in, o for of em vez de mostrar os indices ele me mostra o valor */
    console.log(valor);
}

console.log('##############');

nome.forEach(function(valor, indice, array) {
   console.log(valor, indice, array);
});