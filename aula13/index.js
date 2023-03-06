// let umaString = "um \"texto\""; // escapar um caracter de aspas
// string são indexedas 
//               01234567   // a strind tem um indice sempre começa no zero   
let umaString = "um texto"; // escapar um caracter de aspas
console.log(umaString[4]);  // comando para ver o indice da string
console.log(umaString.charAt(6)); // comando para ver o indice da string
console.log(umaString.concat(' ', 'em', ' ', 'um',)); // comando para fazer a concatenação da string, mais é recomendavel usar template string
console.log(umaString + 'em um lindo dia');
console.log(`${umaString} em um lindo dia`); // forma correta de fazer a concatenação

console.log(umaString.indexOf('texto')); // comando para saber qual indice começa uma palavra
console.log(umaString.indexOf('o', 3)); // vai começar a encontrar depois do indice 3
console.log(umaString.lastIndexOf('o')); // comando para achar um indice de tras pra frente
console.log(umaString.match(/[a-z]/g)); // ele me retorna todo as letras minuscala da string
console.log(umaString.search(/[x]/g)); // comando para pesquisa o meu indice
console.log(umaString.replace('um', 'outra coisa')); // comando para mudar o valor da minha string
console.log(umaString.replace('um', '#')); // comando para mudar o valor da minha string e seu colocar G vai mudar aonda tem um 
console.log(umaString.length); // comando para ver o tamanho da minha string
console.log(umaString.slice(0, 3)); // comando pra fatir minha string
console.log(umaString.slice(-3)); // peguei a minha strin inteira e subtrai por menos tres(-3)
console.log(umaString.substring(umaString.length -2, umaString.length -1)); // menos utilizado
console.log(umaString.split(' ', 1)); // comando para nao incluir um valor
console.log(umaString.toLocaleUpperCase()); //comando para torna todo o valor da minha string em maisculo
console.log(umaString.toLocaleLowerCase()); // comando para torna todo o valor da minha string em minusculo