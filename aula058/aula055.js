(function (idade, peso, altura) {

    const sobrenome = 'Schimidt';
    function falaOi(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(falaOi('Fernando'));
    }

    falaNome()
    console.log(idade,peso,altura)
})(30,100,1.75);
