const btnGravador = document.getElementById('btn-gravador');
const statusGravador = document.getElementById('status-gravacao');

btnGravador.addEventListener('pointerdown', function () {
    btnGravador.innerHTML = '🔴 Gravando... Não solte!'
    btnGravador.style.backgroundColor = '#e74c3c';
    statusGravador.innerHTML = 'Status: Capturando áudio...';
});

btnGravador.addEventListener('pointerup', function () {
    btnGravador.innerHTML = '🎤 Pressione e segure para gravar';
    btnGravador.style.backgroundColor = '#3498db';
    statusGravador.innerHTML = 'Status: Gravação concluída e enviada!';
});

btnGravador.addEventListener('pointercancel', function () {
    btnGravador.innerHTML = '🛑 Gravação cancelada!';
    btnGravador.style.backgroundColor = '#9ca0a3';
    statusGravador.innerHTML = 'Status: Gravação cancelada! Aperte e segure novamente para gravar.';
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/pwabuilder-sw.js');
    });
}
