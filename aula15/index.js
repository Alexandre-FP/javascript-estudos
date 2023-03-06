let num1 = 9;

//Formas de fazer raiz quadrada
console.log(num1 ** (1/2));
console.log(num1 ** 0.5);


let result = Math.floor(num1); // arredodando o number para baixo
let result1 = Math.ceil(num1); // arredodando o number para cima
let result2 = Math.round(num1); /* arredodando o number para o mais proximo, da metade de 50 ele arredonda pra cima, 
da metade pra baixo ele arredonda pra baixo */

console.log(result, result1, result2);
console.log(Math.max(1,2,3,6,5,4,7,8,9,10)); // comando para retorna o maior number de um sequincia de number
console.log(Math.min(1,2,3,6,5,4,7,8,9,10)); // comando para retorna o menor number de um sequincia de number

const aleato = Math.round(Math.random() * (10, -5) + 5);
console.log(aleato); // gerando um number aleatorio

console.log(Math.PI) // comando para mostrar o valor de pi
console.log(Math.pow(2, 10)) // comando para ele um number
console.log(2 ** 10); //ou fazer direto

console.log(100 / 0); // valor infinity