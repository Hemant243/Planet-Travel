const home = document.getElementById("home");
const destination = document.getElementById("destination");
const crew = document.getElementById("crew");
const technology = document.getElementById("technology");
const menu_close = document.getElementById("menu_close");
const menu_open = document.getElementById("menu_open");

if (window.location.pathname === "/index.html") {
  home.style.borderBottom = "5px solid #fff";
} else if (window.location.pathname === "/destination.html") {
  destination.style.borderBottom = "5px solid #fff";
} else if (window.location.pathname === "/crew.html") {
  crew.style.borderBottom = "5px solid #fff";
} else if (window.location.pathname === "/technology.html") {
  technology.style.borderBottom = "5px solid #fff";
}

menu_open.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "block";
  event.preventDefault();
});
menu_close.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "none";
  event.preventDefault();
});
