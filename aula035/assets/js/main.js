const elemetos=[
    {tag:'p',texto:'Vai Corinthians1.'},
    {tag:'div',texto:'Vai Corinthians2.'},
    {tag:'secion',texto:'Vai Corinthians3.'},
    {tag:'footer',texto:'Vai Corinthians4.'},
];


const container = document.querySelector('.container');
const div = document.createElement('div');


for(let i =0; i< elemetos.length; i++){
    let {tag,texto}=elemetos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);

}
container.appendChild(div);