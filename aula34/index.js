// for = repetição

// i = index
for (let i = 0; i <= 10; i ++) { //estrutura para criar a repetição
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}





const fruta = ['maça', 'uva', 'banana'];

for (let i = 0; i < fruta.length; i++) {
   console.log(`Indice ${i}, ${fruta[i]}`);
}