const container = document.getElementById('particle-container');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 20 + 20;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const x = Math.random() * container.offsetWidth;
  const y = Math.random() * container.offsetHeight;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}
setInterval(createParticle, 500);