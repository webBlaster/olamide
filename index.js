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


ScrollReveal().reveal('.one', { delay: 1000 });
ScrollReveal().reveal('.two', { delay: 1000 });
ScrollReveal().reveal('.three', { delay: 1000 });
ScrollReveal().reveal('.four'), { delay: 1000 };
ScrollReveal().reveal('.five'), { delay: 1000 };