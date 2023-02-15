const navbar = document.querySelector(".navbar");
const openMenu = document.querySelector('button[aria-label="Open menu"]');
const closeMenu = document.querySelector('button[aria-label="Close menu"]');

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});
