// tipos de dados primitivos, null, Boolean
//String, number, udefined

const nome = 'luiz';//string
const nome1= "luiz"; //string
const nome2 = `luiz`;//string
const num1 = 10; // number
const num2 = 10.50; //number
let nomeAluno; //udefined -> não aponta pra local nenhuma na memória
let sobrenomeAluno = null; //Nulo -> não aponta pra local nenhuma na memória
let aprovado = false; //Boolean = true, false (Lógico)

console.log(typeof nome, nome) // typeof serve pra ver o tipo da minha variavel string, number etc...

let a = 2;
let b = a;

console.log(a, b); // b recebe valor de a

a = 3;

console.log(a, b); //sendo assim o a tem um novo valor, mais nao altera o valor de b