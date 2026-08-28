document.addEventListener('DOMContentLoaded', () => {
    // --- Orden aleatorio de la galería ---
    const grid = document.getElementById('masonryGrid');
    const modal = document.getElementById('imageModal');

    function shuffleGallery() {
        if (!grid) return;
        // No reordenar mientras el modal está abierto, para no confundir al usuario
        if (modal && modal.style.display === 'flex') return;

        const gridItems = Array.from(grid.querySelectorAll('.gallery-item'));

        // Fisher-Yates shuffle
        for (let i = gridItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gridItems[i], gridItems[j]] = [gridItems[j], gridItems[i]];
        }

        // Vuelve a insertarlos en el nuevo orden dentro del grid
        gridItems.forEach(item => grid.appendChild(item));
    }

    shuffleGallery();                    // orden aleatorio al cargar la página
    setInterval(shuffleGallery, 7000);   // y luego cada 7 segundos

    const items = Array.from(document.querySelectorAll('.gallery-item'));
    const modalImg = document.getElementById('imgFull');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        const img = items[currentIndex].querySelector('img');

        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        openModal(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openModal(currentIndex);
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'flex') return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
});