// Esperamos a que cargue todo el DOM antes de mapear los elementos
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const indicators = Array.from(document.getElementById('carouselNav').children);

    let currentIndex = 0;

    // Función principal para mover el carrusel y actualizar la paginación
    function updateCarousel(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Movemos el track horizontalmente en porcentajes
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizamos las clases activas en los puntitos inferiores
        indicators.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Listeners para los botones flecha
    nextButton.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    // Listeners para cuando hace clic directamente en los puntitos
    indicators.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // Soporte táctil (Swipe) nativo para que funcione fluido en móviles
    let startX = 0;
    let endX = 0;
    
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
        endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        // Umbral de sensibilidad para el deslizamiento (50 pixeles)
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                updateCarousel(currentIndex + 1); // Deslizó hacia la izquierda (Siguiente)
            } else {
                updateCarousel(currentIndex - 1); // Deslizó hacia la derecha (Anterior)
            }
        }
    }, { passive: true });
});