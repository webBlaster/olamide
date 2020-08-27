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

ScrollReveal().reveal('.one', { delay: 100 });
ScrollReveal().reveal('.two', { delay: 800 });
ScrollReveal().reveal('.three', { delay: 500 });
ScrollReveal().reveal('.four'), { delay: 800 };
ScrollReveal().reveal('.five'), { delay: 800 };