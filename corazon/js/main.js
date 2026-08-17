const heartBtn = document.getElementById('heartBtn');
const heartIcons = ['❤️', '💖', '💕', '💗', '💓', '✨'];

heartBtn.addEventListener('click', (e) => {
  // Determinar el punto de origen del clic o toque
  const rect = heartBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Generar varios corazones por cada toque
  const totalHearts = 12;

  for (let i = 0; i < totalHearts; i++) {
    createFloatingHeart(centerX, centerY);
  }
});

function createFloatingHeart(x, y) {
  const heart = document.createElement('span');
  heart.classList.add('floating-heart');

  // Seleccionar un icono al azar
  heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];

  // Posicionar en el centro del corazón
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Trayectorias aleatorias en direcciones variadas (en píxeles)
  const tx = (Math.random() - 0.5) * 260; // Desplazamiento horizontal
  const ty = -(Math.random() * 200 + 100); // Desplazamiento vertical hacia arriba
  const rot = (Math.random() - 0.5) * 90; // Rotación ligera

  heart.style.setProperty('--tx', `${tx}px`);
  heart.style.setProperty('--ty', `${ty}px`);
  heart.style.setProperty('--rot', `${rot}deg`);

  // Variar el tamaño del corazón
  const size = Math.random() * 1.2 + 1; // de 1rem a 2.2rem
  heart.style.fontSize = `${size}rem`;

  document.body.appendChild(heart);

  // Eliminar el elemento del DOM al terminar la animación
  setTimeout(() => {
    heart.remove();
  }, 1800);
}