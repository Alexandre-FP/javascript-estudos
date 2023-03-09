const pessoa = { // criando um objeto
    nome: 'Ale', // se o valor nao exixstir eu posso setar um valor
    sobrenome: 'Fernandes',
    idade: 21,
    endereco: {
       rua: 'Av Professor',
       numero: 84
    }
};
 //Atribuição via Destruturação
const { nome, sobrenome, endereco: { rua, numero }, ...resto} = pessoa;
console.log(nome, sobrenome, rua, numero, resto);