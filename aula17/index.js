// função executa uma ação
// existe fanções que nao retorna valor nem um

function saudacao(nome) {  //criando um parametro pra minha função
   return `Bom dia ${nome}!`; // sempre que eu quiser retorna um valor da minha função, tudo que está abaixo de return nao será executado
}
const fala = saudacao('Ale'); // esse valor vai me retorna dentro da minha função
console.log(fala);

function soma(x = 1, y = 1){ /* colocando um valor no x e y para quando eu nao colocar nem um valor em soma, 
ele retorna o valor que eu declarei */
    const result = x + y;
    return result;
}

console.log(soma()); /* se nao colocar nem um valor ele ira me retorna o parametro que eu coloquei no x e y, 
e seu colcoar um valor diferente dentro de soma na linha 16 ai sim ele ira mudar o valor exemplo (2, 2) = 4 */

// função anonima podemos criar uma função atribuindo ela em uma variavel
const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(9));

//jeito mais atualizado de criar uma função anonima arrow-fanction
const raizz = (n) => {
    return n ** 0.5;
};

console.log(raizz(16)); 

