const menuToggle = document.querySelector(".overlay-trigger");
const overlay = document.querySelector(".dark-overlay");

const openOverlay = () => {
    overlay.style="display:block";
}

const closeOverlay = () => {
    overlay.style="display:none";
}


menuToggle.addEventListener("click", openOverlay);
overlay.addEventListener("click", closeOverlay);