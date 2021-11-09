// Nav du burger

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// ouvre le burger menu
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// fermer le burger menu
// sélectionner nav link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);