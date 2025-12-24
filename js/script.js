// Mobile menu toggle (safe, no imports)

const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
}

if (mobileMenu && nav) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}
