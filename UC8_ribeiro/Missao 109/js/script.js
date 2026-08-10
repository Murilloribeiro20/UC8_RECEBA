const painelLog = document.getElementById('log-painel');

function registrarLog(mensagem) {

    const novaLinha = document.createElement('div');
    novaLinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painelLog.appendChild(novaLinha);

}

//EVENTOS DE MOUSE
const btnClique = document.getElementById('btn-clique'); //botão de clique
const areaMouse = document.getElementById('area-mouse'); //área de teste

btnClique.addEventListener('click', function() {
    registrarLog("Evento de Mouse: 'click' disparado");
});

areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "Mouse entrou na área!";
    areaMouse.style.backgroundColor = "#13df24";
    registrarLog("Evento de Mouse: 'mouseenter' disparado");
});

areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "Mouse saiu da área!";
    areaMouse.style.backgroundColor = "#c41104";
    registrarLog("Evento de Mouse: 'mouseleave' disparado");
});

const campoTeclado = document.getElementById('campo-teclado');//campo de teste

//evemtos de teclado:keydown, keyup
campoTeclado.addEventListener('keydown', function(evento) {
    registrarLog("Teclado: Evento de 'keydown' disparado!");
});

campoTeclado.addEventListener('keyup', function(evento) {
    registrarLog("Teclado: Evento de 'keyup' disparado!");
});
