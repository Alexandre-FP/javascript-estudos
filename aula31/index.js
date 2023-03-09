// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função

const verdade = true;

let nome = 'Ale';
var nome1 = 'Fernandes';

if(verdade){
    let nome = 'Otavio';
    var nome1 = 'Rogerio';

    if(verdade){
        var nome1 = 'Ronaldo';
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome1);