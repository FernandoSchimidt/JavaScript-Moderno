const nome = 'Fernando';
//pode ter aspas simples ou duplas

const nome1 ="Schimidt";
//pode se usar crase
const nome2=`Silva`;
const num1 = 10; //number
const num2 = 10.52;//number
let nomeAluno;//declarou mais nao foi iniciada, undefined por padrao, nao aponta para lugar nenhum na memoria
const sobreNomeAluno = null; //Nulo -> não aponta para lugar nenhum na memoria
const boolean = true; //operador logico

console.log(typeof nome, nome); //verifica o tipo/ e valor apos a ,

const  a = [1,2];
const b = a;

console.log(a,b);


b.push(3);

console.log(a,b);

const num1 = '5';
const num2 = 10;
console.log(num1+num2); //505 concatena

const num1 = 10;
const num2 = Number('5.2');
console.log(num1+num2);
console.log(typeof num2);