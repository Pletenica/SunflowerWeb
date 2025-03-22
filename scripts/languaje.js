document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.getElementById("main-btn");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".option");
    const watchTrailerElement = document.getElementById("watch_trailer");
    const screenshotTitleElement = document.getElementById("screenshot_title");
    const charactersTitleElement = document.getElementById("characters_title");
    const teamTitleElement = document.getElementById("team_title");
    const project_titleTitleElement = document.getElementById("project_title");
    const josepRolElement = document.getElementById("josep_rol");
    const arnauRolElement = document.getElementById("arnau_rol");
    const rogerRolElement = document.getElementById("roger_rol");
    const silvinoRolElement = document.getElementById("silvino_rol");
    const javierRolElement = document.getElementById("javier_rol");
    const adriaRolElement = document.getElementById("adria_rol");
    const lucasRolElement = document.getElementById("lucas_rol");

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
    const josepRolTranslations = {
        es: "DIRECTOR DE ARTE",
        en: "ART DIRECTOR",
        ca: "DIRECTOR D'ART"
    };
    const arnauRolTranslations = {
        es: "PROGRAMADOR",
        en: "PROGRAMMER",
        ca: "PROGRAMADOR"
    };
    const rogerRolTranslations = {
        es: "DIRECTOR DE DISEÑO",
        en: "DESSIGN DIRECTOR",
        ca: "DIRECTOR DE DISSENY"
    };
    const silvinoRolTranslations = {
        es: "ARTISTA 3D",
        en: "3D ARTIST",
        ca: "ARTISTA 3D"
    };
    const javierRolTranslations = {
        es: "DISEÑADOR",
        en: "DESIGNER",
        ca: "DISSENYADOR"
    };
    const adriaRolTranslations = {
        es: "DISEÑADOR DE SONIDO",
        en: "SOUND DESIGNER",
        ca: "DISSENYADOR DE SO"
    };
    const lucasRolTranslations = {
        es: "DISEÑADOR DE SONIDO",
        en: "SOUND DESIGNER",
        ca: "DISSENYADOR DE SO"
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
            josepRolElement.textContent = josepRolTranslations[selectedLang];
            arnauRolElement.textContent = arnauRolTranslations[selectedLang];
            rogerRolElement.textContent = rogerRolTranslations[selectedLang];
            silvinoRolElement.textContent = silvinoRolTranslations[selectedLang];
            javierRolElement.textContent = javierRolTranslations[selectedLang];
            adriaRolElement.textContent = adriaRolTranslations[selectedLang];
            lucasRolElement.textContent = lucasRolTranslations[selectedLang];
            
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
