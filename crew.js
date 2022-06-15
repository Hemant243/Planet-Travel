// import myJson from "../FEmentor/data.json" assert { type: "json" };

// console.log(myJson);

const crew_1 = document.getElementById("crew_1");
const crew_2 = document.getElementById("crew_2");
const crew_3 = document.getElementById("crew_3");
const crew_4 = document.getElementById("crew_4");
const crew_rank = document.getElementById("crew_rank");
const crew_name = document.getElementById("crew_name");
const crew_details = document.getElementById("crew_details");
const crew_image = document.getElementById("crew_image");
const crew_navigation = document.getElementsByClassName("crew-nav");
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

crew_1.addEventListener("click", () => {
  crew_image.src = "images/crew/image-douglas-hurley.webp";
  crew_rank.innerHTML = "Commander";
  crew_name.innerHTML = "Douglas Hurley";
  crew_details.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
});

crew_2.addEventListener("click", () => {
  crew_image.src = "images/crew/image-mark-shuttleworth.png";
  crew_rank.innerHTML = "Mission Specialist ";
  crew_name.innerHTML = "MARK SHUTTLEWORTH";
  crew_details.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
});

crew_3.addEventListener("click", () => {
  crew_image.src = "images/crew/image-victor-glover.png";
  crew_rank.innerHTML = "PILOT";
  crew_name.innerHTML = "Victor Glover";
  crew_details.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
});

crew_4.addEventListener("click", () => {
  crew_image.src = "images/crew/image-anousheh-ansari.png";
  crew_rank.innerHTML = "Flight Engineer";
  crew_name.innerHTML = "Anousheh Ansari";
  crew_details.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
});
menu_open.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "block";
  event.preventDefault();
});
menu_close.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "none";
  event.preventDefault();
});

for (var i = 0; i < crew_navigation.length; i++) {
  crew_navigation[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("crew-active");
    current[0].className = current[0].className.replace("crew-active", "");
    this.className += " crew-active";
    event.preventDefault();
  });
}
