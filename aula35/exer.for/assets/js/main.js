function meuScopo() {
  const elementos = [
    { tag: "p", texto: "frase 1" },
    { tag: "div", texto: "frase 2" },
    { tag: "footer", texto: "frase 3" },
    { tag: "section", texto: "frase 4" },
];
  const container = document.querySelector(".container");
  const div = document.createElement('div');

  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    console.log(elementos[i].tag); // .tag = pegando o indice dentro do meu array

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
  }

  container.appendChild(div);
}

meuScopo();