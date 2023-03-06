// //Função contrutora
// // sempre ter dois parametros no Date, o mes sempre começa no 0 no javaScript
// const data = new Date(2023, 2, 03, 08, 40, 45); // ano, mes, dia, hora, minutos, segundos, milissegundos
// const dataa = new Date('2023-04-03 08:55:26'); // data com string
// console.log(dataa.toString());
// console.log(data.toString());
// console.log(Date.now());

// /////////

// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1); // Mes começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('milliSeg', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0- Domingo, 6 Sábado

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formaData (data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);
