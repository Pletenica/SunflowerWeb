document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.getElementById("main-btn");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".option");
    const watchTrailerElement = document.getElementById("watch_trailer");

    // Diccionario de idiomas
    const watchTrailerTranslations = {
        es: "VER TRÁILER",
        en: "WATCH TRAILER",
        ca: "VEURE TRÁILER"
    };


    // Mostrar / ocultar menú
    mainBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("visible");
    });

    // Selección de idioma
    options.forEach(option => {
        option.addEventListener("click", function () {
            const newIcon = this.querySelector("img").src;
            const selectedLang = this.getAttribute("data-lang");

            // Cambiar el icono del botón principal
            mainBtn.querySelector("img").src = newIcon;

            // Cambiar el texto al idioma seleccionado
            watchTrailerElement.textContent = watchTrailerTranslations[selectedLang];

            // Ocultar el menú con animación
            dropdown.classList.remove("visible");
            setTimeout(() => {
                dropdown.classList.add("hidden");
            }, 300);
        });
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", (event) => {
        if (!mainBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("visible");
            setTimeout(() => {
                dropdown.classList.add("hidden");
            }, 300);
        }
    });
});
