const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Schimidt',
    idade: '26',
    endereco: {
        rua: 'Rua das Caviunas',
        numero: 10
    }
};


//Atribuição via desestruturação
const {
    nome: teste = '',
    sobrenome,
    endereco: {
        rua:r=12345,
        numero
    },
    endereco
} = pessoa;
console.log(r, numero, endereco);