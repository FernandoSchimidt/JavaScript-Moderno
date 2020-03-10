// //ECMAScript padronizacao da linguagem javascript
// var nome = 'Fernando';
// console.log(nome);

// //let não pode ser  redeclarada

// //Nao fazer isso
// nome = 'Schimidt'
// console.log(nome)

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') {
            acumulador += numero;
        }
        if (operador === '-') {
            acumulador -= numero;
        }
        if (operador === '*') {
            acumulador *= numero;
        }
        if (operador === '/') {
            acumulador = numero;
        }
    }

    console.log(acumulador)
};
conta('+', 0, 20, 30, 40, 50);