document.getElementById("watch_trailer").addEventListener("click", function() {
    const background = document.getElementById("headerBackground");
    const logo = document.getElementById("headerLogo");
    const button = document.getElementById("watch_trailer");
    const videoContainer = document.getElementById("videoContainer");
    const provencanaImage = document.getElementById("provencana-image");

    // Aplicar fade-out
    logo.classList.add("fade-out");
    button.classList.add("fade-out");

    // Mostrar el video después de la animación
    setTimeout(() => {
      background.style.display = "none";
      logo.style.display = "none";
      button.style.display = "none";
      provencanaImage.style.display = "none";
      videoContainer.style.display = "block";
      
      setTimeout(() => {
        videoContainer.style.opacity = 1;
      }, 100); // Pequeño retraso para aplicar la transición
    }, 1000); // Tiempo de espera para el fade-out
  });