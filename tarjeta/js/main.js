// genera pétalos flotantes de forma dinámica, respetando el ancho de pantalla
const total = window.innerWidth < 600 ? 10 : 18;

for (let i = 0; i < total; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (9 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.setProperty('--scale', 0.6 + Math.random() * 0.8);

  const heart = document.createElement('div');
  heart.className = 'heart';
  p.appendChild(heart);

  document.body.appendChild(p);
}