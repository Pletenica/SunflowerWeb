document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.getElementById("main-btn");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".option");
    const watchTrailerElement = document.getElementById("watch_trailer");
    const screenshotTitleElement = document.getElementById("screenshot_title");
    const charactersTitleElement = document.getElementById("characters_title");
    const teamTitleElement = document.getElementById("team_title");
    const project_titleTitleElement = document.getElementById("project_title");

    // Diccionario de idiomas
    const watchTrailerTranslations = {
        es: "VER TRÁILER",
        en: "WATCH TRAILER",
        ca: "VEURE TRÁILER"
    };
    const projectTitleTranslations = {
        es: "PROYECTO",
        en: "PROJECT",
        ca: "PROJECTE"
    };
    const charactersTitleTranslations = {
        es: "PERSONAJES",
        en: "CHARACTERS",
        ca: "PERSONATGES"
    };
    const teamTitleTranslations = {
        es: "EQUIPO",
        en: "TEAM",
        ca: "EQUIP"
    };
    const screenshotsTitleTranslations = {
        es: "CAPTURAS",
        en: "SCREENSHOTS",
        ca: "CAPTURES"
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
            project_titleTitleElement.textContent = projectTitleTranslations[selectedLang];
            charactersTitleElement.textContent = charactersTitleTranslations[selectedLang];
            teamTitleElement.textContent = teamTitleTranslations[selectedLang];
            screenshotTitleElement.textContent = screenshotsTitleTranslations[selectedLang];

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
