const numero =Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Seu numero - 2 é ${numero-2}</p><br/>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br/>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero **0.5}</p><br/>`;
texto.innerHTML += `<p>É Nan : ${Number.isNaN(numero)}</p><br/>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p><br/>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p><br/>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p><br/>`;
