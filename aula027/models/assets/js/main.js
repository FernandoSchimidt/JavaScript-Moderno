// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo'
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda-Feira'
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'terça-Feira'
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta-Feira'
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta-Feira'
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-Feira'
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sabado'
//             return diaSemanaTexto;
//         default:
//             diaSemana = '';
//             return diaSemanaTexto;
//     }
// }

// function getNomeMEs(numeroMes) {
//     let mes;
//     switch (mes) {
//         case 0:
//             mes = 'Janeiro'
//             return mes;
//         case 1:
//             mes = 'Fevereiro'
//             return mes;
//         case 2:
//             mes = 'Março'
//             return mes;
//         case 3:
//             mes = 'Abril'
//             return mes;
//         case 4:
//             mes = 'Maio'
//             return mes;
//         case 5:
//             mes = 'Junho'
//             return mes;
//         case 6:
//             mes = 'Julho'
//             return mes;
//         default:
//             mes = '';
//             return mes;
//     }
// }
// function zeroAEsquerda(num){
//     return num >=10? num:`0${num}`;
// }

// function criaData(data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMEs(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de  ${nomeMes}`+
//     `de ${data.getFullYear()}`+
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`

// }
// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full', 
    timeStyle:'short'
};
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes);