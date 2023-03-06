/* 
Aritméticos (+) (-) (/) (*)
+ adição / concatenação depedendo do tipo de dado
- sub
/ div
* multi
% resto de divisaõ
** potenciação, para elevar um numero
INCREMENTO = ++
DECREMENTO = --
----------------------------------------------------------
Precedencias entre os operadores
()
**
* / %
+ -

*/
const num1 = 10;//quando um numero for uma string e usamos o simbolo do mais, ele vai faz a junção de dois numeros sendo assim 510
const num2 = 5;
console.log(num1 % num2);

let contador = 1; // INCREMENTO de mais mais (++)
contador++;
++contador; 
console.log(contador); //o certo certo de fazer

let contadorr = 1; // INCREMENTO de mais mais (++)
console.log(++contadorr); //errado de fazer 

let contadorrr = 10 //DECREMENTO de menos menos (--)
contadorrr--;
console.log(contadorrr);

//NaN = Not a number
//operadors de atribuição qualquer sinal e tomar cuidado com o tipo de dado
let cont = 2; 
cont *= 2;
cont *= 2;
cont *= 2;
console.log(cont);
//--------------------------------------------

const num5 =10;
const num6 = parseInt('5'); //como converter uma string em um valor numerico interiro 
const num7 = parseFloat('5.2');//como converter uma string em um valor numerico float
const num8 = Number('1');//como converter uma strin em um numero, mais sempre que uma string for numero, se for texto ele vai dar NaN = nao a numero
console.log(num5 * num6 / num7);

let num11 = 2;
let num10 = 3;

console.log(num11 * num10 );