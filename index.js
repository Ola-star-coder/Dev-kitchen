//hamburgers variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//hamurger menu events
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// Closing the navbar with
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


