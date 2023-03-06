//Nunca usar palavras reservadas do JS
//Variaveis precisam ter nome siginificativos
//Não pode começar o nome de uma varialvel com um numero, sempre com letras minusculas
//Uma varialvvel nao pode conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não podemos redeclarar variaveis e nem constante com let 
//Não utilize var, utilize lete const

const nome = 'Alexandre'; /*Sempre atribuir um valor na constante
nao posso criar um constante sem dar valor a ela e nao posso modificar o valor dela */
console.log(nome);

const primeiroNumero = '5'; /* quando colocado aspas em algum numero ele passa a ser uma string e quando usa 
um sinal de mais(+) em um numero com aspas ele faz a contenação a junção desse numero dando o resultado 510*/
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

// +(adição) -(subtração) *(vezes) /(divisão)

typeof //mostrar o tipo de uma variavel, uma string ou um numero

console.log(primeiroNumero + segundoNumero); // a soma do valor 5 e 10 = 15