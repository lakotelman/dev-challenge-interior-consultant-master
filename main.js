const menuIcon = document.getElementById("mobile-menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

function openMenu() {
  mobileMenu.style.display = "block";
}

function closeMenu(){ 
    mobileMenu.style.display = "none"
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu)