const nomes = ['Fernando', 'Henrique', 'schimidt', 'Ana'];
const novo = [...nomes];
// const nomes = new Array('Fernando', 'Maria', 'Joana');

nomes.unshift('Joao')
//adiciona no fim
nomes.push('Batat')
//remove do fim 
nomes.pop(nomes[4])

console.log(nomes)