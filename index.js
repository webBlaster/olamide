const menu = document.querySelector(".overlay-trigger");
const overlay = document.querySelector(".dark-overlay");

const openOverlay = () => {
    overlay.style="display:block";
}

const closeOverlay = () => {
    overlay.style="display:none";
}


menu.addEventListener("click", openOverlay);
overlay.addEventListener("click", closeOverlay);