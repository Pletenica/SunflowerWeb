document.addEventListener("DOMContentLoaded", () => {
    const mainBtn = document.getElementById("main-btn");
    const dropdown = document.getElementById("dropdown");
    const options = document.querySelectorAll(".option");
    const watchTrailerElement = document.querySelector(".trailer-button-text");
    const screenshotTitleElement = document.getElementById("screenshot_title");
    const charactersTitleElement = document.getElementById("characters_title");
    const teamTitleElement = document.getElementById("team_title");
    const projectTitleTitleElement = document.getElementById("project_title");
    const josepRolElement = document.getElementById("josep_rol");
    const arnauRolElement = document.getElementById("arnau_rol");
    const rogerRolElement = document.getElementById("roger_rol");
    const silvinoRolElement = document.getElementById("silvino_rol");
    const javierRolElement = document.getElementById("javi_rol");
    const adriaRolElement = document.getElementById("adria_rol");
    const lucasRolElement = document.getElementById("lucas_rol");
    const sinopsisElement = document.getElementById("sinopsis");
    const articleSectionTitleElement = document.getElementById("article_section_title");
    const articleWebLinkElement = document.getElementById("article_web_link");

    // Diccionario de idiomas
    const sinopsisTranslations = {
        en: "Between Worlds is a story of personal growth and constant reinvention. In MAT, your companion on this journey, has found himself trapped far from home. So the two of you share one goal: to escape this nightmare and return to where MAT’s family is waiting for him and needs him 🫂. Unfortunately, this return won’t be easy — something, or rather someone, seems determined to stop MAT from escaping. Help MAT get back home, experience a path full of challenges as you explore multiple unique worlds, and discover what’s really going on in this little universe 🌌💫",
        es: "Between Worlds es una historia de crecimiento personal y reinvención constante. En MAT, tu compañero en este viaje, se ha visto atrapado lejos de casa. Así que ambos tenéis un objetivo: escapar de esta pesadilla y volver al lugar donde la familia de MAT lo espera y lo necesita 🫂. Por desgracia, este regreso no será tan fácil. Algo, o mejor dicho, alguien, parece querer evitar que MAT escape. Ayuda a MAT a volver a casa, vive un camino lleno de retos mientras visitas múltiples mundos únicos y descubre qué está pasando con este pequeño universo 🌌💫",
        ca: "Between Worlds' és una història de creixement personal i reinvenció constant. En MAT, el teu company en aquest viatge, s'ha vist atrapat lluny de casa. Així doncs, tots dos teniu un objectiu, escapar d'aquest mal somni i tornar on la família del MAT l'esperen i el necessiten 🫂. Per desgràcia, aquest retorn no serà tan fàcil, alguna cosa o més ben dit; algú, sembla que vol evitar que el MAT escapi. Ajuda el MAT a tornar a casa, viu un camí ple de reptes mentre visites múltiples mons únics i descobreix que està passant amb aquest petit univers🌌💫"
    };
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
    const articleSectionTitleTranslations = {
        es: "MIRA EL ARTÍCULO DE",
        en: "CHECK THE ARTICLE FROM",
        ca: "MIRA L'ARTICLE DE"
    };
    const articleWebLinkTranslations = {
        es: "Artículo Web",
        en: "Article Web",
        ca: "Article Web"
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
            sinopsisElement.textContent = sinopsisTranslations[selectedLang];
            projectTitleTitleElement.textContent = projectTitleTranslations[selectedLang];
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
            articleSectionTitleElement.textContent = articleSectionTitleTranslations[selectedLang];
            articleWebLinkElement.textContent = articleWebLinkTranslations[selectedLang];

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
