let varA = 'A';//b
let varB = 'B';//c
let varC = 'C';//a

let aux = varA;
varA =  varB;
varB = varC;
varC = aux;
console.log(varA, varB, varC);