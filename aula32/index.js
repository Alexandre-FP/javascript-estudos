// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a]; // atribuição via a desusturação
// [a, b, c] = letras; // estou modificando os valores dela no array

// console.log(a, b, c);

// -> ... rest, ...spread resto das coisas
const numero = [1000, 2000, 3000, 4000];
const [um, ,tres] = numero;

console.log(um, tres);

const lista = [ [1, 2, 3], [4, 5, 6] ];
const [lista1, lista2] = lista;
console.log(lista2[2]);