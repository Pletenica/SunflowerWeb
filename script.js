document.addEventListener("DOMContentLoaded", function() {
    var borderLayer = document.querySelector(".inverse-border-layer");
    var containerLayer = document.querySelector(".container");
    var navButtons = document.querySelectorAll(".nav-button");
  
    // Animate the inverse animation on page load
    setTimeout(function(){
        setTimeout(function() {
            borderLayer.style.borderRadius = "24px";
                borderLayer.style.margin = "4px";
                borderLayer.style.width = "calc(100% - 8px)";
                borderLayer.style.height = "calc(100% - 8px)";
                borderLayer.style.left = "0";
                borderLayer.style.top = "0";
                borderLayer.style.opacity = "1";
        }, 100);
        setTimeout(function(){
            navButtons.forEach(function(button_inside) {
                button_inside.style.opacity = "1";
                
            });
        }, 650);
        setTimeout(function(){
            containerLayer.style.opacity = "1";
            button_inside.classList.remove("disable-click");
        }, 800);
    }, 100);

  
    navButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        containerLayer.style.opacity = "0";
        setTimeout(function(){
            borderLayer.style.borderRadius = "0";
            borderLayer.style.width = "0";
            borderLayer.style.height = "0";
            borderLayer.style.left = "50%";
            borderLayer.style.top = "50%";
        }, 200);
        navButtons.forEach(function(button_inside) {
            button_inside.classList.add("disable-click");
            button_inside.style.opacity = "0";
        });
        setTimeout(function() {
          window.location.href = button.getAttribute("data-target");
        }, 1000);
      });
    });
  });