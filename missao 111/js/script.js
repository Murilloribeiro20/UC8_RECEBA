const btnGravador = document.getElementById('btn-gravador');
const statusGravador = document.getElementById('status-gravacao');

btnGravador.addEventListener('mousedown', function() {
    btnGravador.innerHTML = '🔴 Gravando... Não solte!'
    btnGravador.style.backgroundColor = '#e74c3c';
    statusGravador.innerHTML = 'Status: Capturando áudio...';
});

btnGravador.addEventListener('mouseup', function() {
    btnGravador.innerHTML = '🎤 Pressione e segure para gravar';
    btnGravador.style.backgroundColor = '#3498db';
    statusGravador.innerHTML = 'Status: Gravação concluída e enviada!';
});