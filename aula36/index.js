const frutas = ['Maça', 'Banana', 'Pera'];

for (let i in frutas){ // lendo os indices do do meu array
    console.log(frutas[i]); // for in le os indice ou chaves do objeto
}


const pessoa = {
    nome: 'Ale',
    sobrenome: 'Fernandes',
    idade: 21,
};

for (let p in pessoa){
    console.log(p, pessoa[p]); //accessando dados meu meu obejto array
}