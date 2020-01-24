let umaString = "Um texto";

console.log(umaString.charCodeAt(6));

console.log(umaString.concat('',' em','', ' um'));

// console.log(umaString + ' em um lindo dia');
// //template strings
// console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));//pega o indice de onde começa
console.log(umaString.lastIndexOf('o')); //pega o indice de traz para frente

console.log(umaString.match(/[a-z]/g));//Expressao regular

console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace('Um', 'Outra'));//substituir a palavra

console.log(umaString.slice(2,6)); //fatiar uma string