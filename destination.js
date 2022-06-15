const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");
const planetmenu = document.getElementsByClassName("planet_menu_item");
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

moon.addEventListener("click", function () {
  document.getElementById("planet-image").src =
    "images/destination/image-moon.png";
  document.getElementById("planet_name").innerHTML = "MOON";
  document.getElementById("planet__desc").innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  document.getElementById("total__dist").innerHTML = "384,400 km";
  document.getElementById("total__time").innerHTML = "3 days";
});

mars.addEventListener("click", function () {
  document.getElementById("planet-image").src =
    "images/destination/image-mars.png";
  document.getElementById("planet_name").innerHTML = "MARS";
  document.getElementById("planet__desc").innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  document.getElementById("total__dist").innerHTML = "225 MIL. km";
  document.getElementById("total__time").innerHTML = "9 months";
});

europa.addEventListener("click", function () {
  document.getElementById("planet-image").src =
    "images/destination/image-europa.png";
  document.getElementById("planet_name").innerHTML = "EUROPA";
  document.getElementById("planet__desc").innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  document.getElementById("total__dist").innerHTML = "628 MIL. km";
  document.getElementById("total__time").innerHTML = "3 years";
});

titan.addEventListener("click", function () {
  document.getElementById("planet-image").src =
    "images/destination/image-titan.png";
  document.getElementById("planet_name").innerHTML = "TITAN";
  document.getElementById("planet__desc").innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  document.getElementById("total__dist").innerHTML = "1.6 BIL. km";
  document.getElementById("total__time").innerHTML = "7 years";
});

menu_open.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "block";
  event.preventDefault();
});
menu_close.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "none";
  event.preventDefault();
});

// crew_1.addEventListener("click", function () {
//   console.log("clicked on crew1");
// });

// planet menu active tab
for (var i = 0; i < planetmenu.length; i++) {
  planetmenu[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    event.preventDefault();
  });
}
