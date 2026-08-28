// Contador detenido - congelado en el momento en que se pausó
function updateCounter() {
    const days = 64;
    const hours = 16;
    const minutes = 54;
    const seconds = 36;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Se muestra una sola vez (sin setInterval, por eso ya no avanza)
updateCounter();