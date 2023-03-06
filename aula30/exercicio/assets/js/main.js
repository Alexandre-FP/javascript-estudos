const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanas(diaSemana) {
  let diaSemanas;
  switch (diaSemana) {
    case 0:
      diaSemanas = "Domingo";
      return diaSemanas;
    case 1:
      diaSemanas = "Segunda";
      return diaSemanas;
    case 2:
      diaSemanas = "Terça";
      return diaSemanas;
    case 3:
      diaSemanas = "Quarta";
      return diaSemanas;
    case 4:
      diaSemanas = "Quinta";
      return diaSemanas;
    case 5:
      diaSemanas = "Sexta";
      return diaSemanas;
    case 6:
      diaSemanas = "Sabádo";
      return diaSemanas;
  }
  return diaSemanas;
}

function getNomeMes(numeroMes) {
  let nomeMes;
  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
      return nomeMes;
  }
  return nomeMes;
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getDiaSemanas(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} <br/>` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criaData(data);
console.log(criaData(new Date()));