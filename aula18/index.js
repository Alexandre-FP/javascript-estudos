function criaPessoa (nome, sobrenome, idade){
   return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Alexandre', 'Fernandes', 21);
console.log(pessoa1.nome);




const pessoa2 = {
   nome: 'Ale',
   sobrenome: 'Fernandes',
   idade: 21,

   fala(){
    console.log(`${this.nome} ${this.idade} Bom dia`) //nesse contexto this representa o objeto pessoa2
   },

   incrementaIdade(){
    this.idade++;
   }
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();