const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        // verifica se o input esta vazio
        if (!inputTarefa.value) return;
        // criar a tarefa
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
// cria o botao de pagar na li
function criarBotaoApagar(li) {
    // coloca um espaço entre o botao e o texto
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa.')
    li.appendChild(botaoApagar);
}
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        //  remove o pai do elemento
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        const tarefatexto = tarefa.innerText;
        tarefatexto = tarefatexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefatexto);
    }
    const tarefasJOSN = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJOSN);
}
// recupera as tarefas salvas
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();