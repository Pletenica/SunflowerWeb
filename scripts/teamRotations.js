function getRandomRotation(min, max) {
    return Math.random() * (max - min) + min;
}

// Asignar la rotación inicial aleatoria
window.onload = function() {
    const minRotation = -1.5;  // Ángulo mínimo
    const maxRotation = 1.5;   // Ángulo máximo
    const rotation = getRandomRotation(minRotation, maxRotation);
    document.getElementById("josep_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    
    document.getElementById("roger_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("arnau_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("javier_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("silvino_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("adria_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
    document.getElementById("lucas_card").style.transform = `rotate(${getRandomRotation(minRotation, maxRotation)}deg)`;
};