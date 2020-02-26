function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const zerar = document.querySelector('.zerar');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
let segundos = 0;
let timer;

function startClock() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}
document.addEventListener('click', function (e) {
    if (e.target === iniciar) {
        relogio.classList.remove('pausado');
        relogio.classList.remove('zerado');
        clearInterval(timer);
        startClock();
    } else if (e.target === pausar) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    } else if (e.target === zerar) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.add('zerado');
    }
});


