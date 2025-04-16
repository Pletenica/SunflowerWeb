const cards = document.querySelectorAll('.character_card');

  cards.forEach(card => {
    let particleContainer = null;
    let interval = null;

    card.addEventListener('mouseenter', () => {
      if (!particleContainer) {
        particleContainer = document.createElement('div');
        particleContainer.classList.add('particle-container');
        card.appendChild(particleContainer);


        particleContainer.style.zIndex = -10;
        for (let i = 0; i < 15; i++) {
          createParticle(particleContainer);
        }

        interval = setInterval(() => {
          createParticle(particleContainer);
        }, 500);
      }
    });

    card.addEventListener('mouseleave', () => {
      if (particleContainer) {
        const particles = particleContainer.querySelectorAll('.particle');
        particles.forEach(particle => {
          particle.style.animation = 'fadeOut 0.5s forwards';
        });

        setTimeout(() => {
          particleContainer.remove();
          particleContainer = null;
        }, 1000);
      }
    });
  });

  function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 10 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.zIndex = -30;

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 5000);
  }