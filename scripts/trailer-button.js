const hoverDiv = document.getElementById("watch_trailer");
const image = document.querySelector(".trailer-button-background");
const text = document.querySelector(".trailer-button-text");
const originalImageSrc = image.src;
const originalTextColor = text.style.color;

const hoverImageSrc = "img/backgrounds/hover_trailer_button.webp";

hoverDiv.addEventListener("mouseenter", () => {
  image.src = hoverImageSrc;
  text.style.color = "rgb(134, 118, 171)";
});

hoverDiv.addEventListener("mouseleave", () => {
  image.src = originalImageSrc;
  text.style.color = originalTextColor;
});
