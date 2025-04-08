function getRandomRotation(min, max) {
    return Math.random() * (max - min) + min;
}

// Asignar la rotación inicial aleatoria
window.onload = function() {
    const minRotation = -1.5;
    const maxRotation = 3;
    document.getElementById("josep_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("roger_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("arnau_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("javier_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("silvino_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("adria_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("lucas_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;

    document.getElementById("drandkiley_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("mat_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("bomber_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("krabverted_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("professor_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("boss_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("dartcolepsy_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("reflection_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("minion_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
};