// VARIABLES

const btnMobile = document.getElementById("mobile-menu");

const menuSites = document.getElementById("menu-sites");

const button = document.getElementById("btn-sites");

// MOBILE HEADER

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');

    const secondNav = document.getElementById("second-nav");
    secondNav.classList.toggle('active');

    if (menuSites.style.display === "flex") {
        
        menuSites.style.display = "none";
    } 

}

btnMobile.addEventListener('click', toggleMenu);

// SITES INFO

button.addEventListener('click', function() {

    if (menuSites.style.display === "none") {
        
        menuSites.style.display = "flex";

    } else {
        
        menuSites.style.display = "none";
    }

})
