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

const meuFormulario = document.getElementById('meu-formulario');
const campoInput = document.getElementById('campo-input');

campoInput.addEventListener('input', function(){
    registrarLog(`[INPUT] Formulário: Evento 'input' disparado! -> Valor atual:"${campoInput.value}"`);
});


meuformulario.addEventListener('submit', function(evento){
    registrarLog(`[FORM] Formulário: Evento 'submit' disparado! -> Valor atual:"${campoInput.value}"`);
    evento.preventDefault();
});

const campoEnvio = document.getElementById('campo-envio');
campoEnvio.addEventListener('click', function(evento){
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
    evento.preventDefault();
});