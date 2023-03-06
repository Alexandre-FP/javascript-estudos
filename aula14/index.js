let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2)); // passando para um number float para um number inteiro e true, para nao ter imprecisão nos number
num1 = Number(num1.toFixed(2));
console.log(num1);


console.log(num1.toString() + num2); /* comando toString serve para transforma um numero em uma string, 
mais eu nao to alterando minha variavel ela continua sendo um number */  
 // num1 = num1.toString(); // comando para mudar o valor do number para uma string
console.log(num1.toString(2)) // toString serve tambem para mostrar o valor em binario, mais tem que ta o dois em pareteses = (num1.toString(2))
console.log(num1.toFixed(2)); // comando para aredondar um number
console.log(Number.isInteger(num1)); //comando para saber se o numero que estou recebendo é inteiro se sim vai retorna true se nao retorna false

let temp = num1 + Number('6'); // nunca fazer conta usando string, sempre que for fazer conta com string basta converter ela para um number
console.log(Number.isNaN(temp)); /* comando para saber se a operção é valida, se retorna true a operção é invalida, 
se retorna false a operação é valida, mais só quando a minha string for um numero exp '5', se for texto é uma conta invalida retronando true*/

console.log(temp);
