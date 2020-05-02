//Função construtora
function Pessoa(nome, sobrenome) {

    const Id= 123456

    const metodoInterno = function(){
        
    }
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = function () {
        console.log('Sou um metodo')
    }
}

const p1 = new Pessoa('Fernando', 'Schimidt')

console.log(p1)
p1.metodo()