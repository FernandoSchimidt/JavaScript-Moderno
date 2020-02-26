//Declaração de função(function hoisting)
function falaOi(){
    console.log('oi');
}
falaOi();


//First-class objects (Objetos de primera calsse)
//Function Expression
const souUmDado = function(){
    console.log('Sou um dado.');
};



function excutaFuncao(funcao){
    funcao();
}
excutaFuncao(souUmDado);

// Arrow function

const funcaoArrow = ()=>{
    console.log('sou uma rrow function');
};
funcaoArrow();

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar();