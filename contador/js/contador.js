// Fecha inicial: 25 de junio de 2026 (00:00:00)
const startDate = new Date('2026-06-25T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    if (difference < 0) {
        // En caso de que se consulte antes de la fecha
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Cálculo de Días, Horas, Minutos y Segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Formatear a dos dígitos (ej. 05 en lugar de 5)
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Actualizar inmediatamente y luego cada segundo
updateCounter();
setInterval(updateCounter, 1000);