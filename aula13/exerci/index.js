const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome}<br />`
document.body.innerHTML += `Seu nome tem: ${nome.length}<br />`
document.body.innerHTML += `A segunda letro do seu nome é: ${nome[1]}<br />`
document.body.innerHTML += `Qual o primeiro indice da letra do seu nome?: ${nome.indexOf('a')}<br />`
document.body.innerHTML += `Qual o ultimo indice da letra do seu nome?: ${nome.lastIndexOf('a')}<br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`
document.body.innerHTML += `Seu nome com letras maisculas: ${nome.toLocaleUpperCase()}<br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`

