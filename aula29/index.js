function getDiaSemana(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda";
      break;
    case 2:
      diaSemanaTexto = "Terça";
      break;
    case 3:
      diaSemanaTexto = "Quarta";
      break;
    case 4:
      diaSemanaTexto = "Quinta";
      break;
    case 5:
      diaSemanaTexto = "Sexta";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break; // é um parametro para se ele achar true parar nessa linha
    default: // se no caso nem uma for true ele retorna o que tiver depois de default
      diaSemanaTexto = "";
  }
  return diaSemanaTexto;
}

const data = new Date("2023-03-03 09:10:50");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto);
