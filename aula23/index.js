// if pode usar sozinho
// else if não pode ser executado sozinho, sempre usar antes o if
// só pode ter um else na minha condição
const hora = 50;

if (hora >= 0 && hora <= 11 ) {
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}else {
  console.log('Hora invalida');
}

const tenhoGrana = false; // se eu colocar qualquer valor que avalia em false, o resultado seria 'Não vou sair de casa'

if (tenhoGrana){
    console.log('Vou sair de casa');
}else{
    console.log('Não vou sair de casa');
}
