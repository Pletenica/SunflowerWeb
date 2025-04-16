const sideToggle = document.getElementById("side-toggle");
const sidePanel = document.getElementById("side-panel");

sideToggle.addEventListener("click", () => {
  sidePanel.classList.toggle("visible");
});

// Cerrar si se hace clic fuera del panel y botón
document.addEventListener("click", (event) => {
  if (!sideToggle.contains(event.target) && !sidePanel.contains(event.target)) {
    sidePanel.classList.remove("visible");
  }
});
