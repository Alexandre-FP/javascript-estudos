const nome = 'Alexandre ';
const sobrenome = 'Fernandes';
const idade = 21;
const peso = 62;
const alturaEmM = 1.83;
let imc;
let nascimento = 2001
let anoAtual = 2022
let resultadoN;

imc = peso / (alturaEmM * alturaEmM);
resultadoN = anoAtual - nascimento

//tamplet strings
console.log('O paciente se chama', nome + '' + sobrenome, "e o imc dela é.", imc, "a idade dele é", resultadoN, "anos");//Não esta errado, mais é unitilizavel
console.log(`O paciente se chama ${nome}${sobrenome} nasceu em ${nascimento} e o imc dele é. ${imc}, a idade dele é ${resultadoN} anos`);//o jeito mais corrento de fazer
