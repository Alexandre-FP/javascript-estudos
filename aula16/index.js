// Arays agente pode imaginar como uma lista
// diferente das strings arrays são indexados por elemento 
// melhor sempre adiciona mais valores no meu array no final

//               0            1      2 
const alunos = ['Fernandes', 'Ale', 'Jão'] /* como criar um array, no meu array posso ter number booleano, null, 
mais nao é uma boa pratica de programação */

alunos.unshift('Dri'); // comando para adiciona valores no final do meu array

alunos.push('Biel'); // comando para adiciona mais valores no meu array, mas no final do array

alunos[alunos.length] = 'Mi'; // adicionado valores no meu array, mas no final do array, length  fala o tamanho do meu array

alunos.pop() // comando para remover algum valor do meu array no final
alunos.shift(); //comando para remover no começo do meu array

delete alunos[0]; // comando para deleta um valor do meu array, mas o indice do meu array nao é alterado ele existe mais é um valor undefined

console.log(alunos.slice); // acessando o meu array, slice fatiando meu array
console.log(typeof alunos); // array é um objeto
console.log(alunos instanceof Array); // comando para saber que eu estou realmente trabalhando com array

// alunos [0] = 'Eduardo'; //mudando o valor do meu array
// alunos [3] = 'Mi'; // adicionando mais valores no meu array