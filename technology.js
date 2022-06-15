const tech = document.getElementsByClassName("tech");
const tech_1 = document.getElementById("tech_1");
const tech_2 = document.getElementById("tech_2");
const tech_3 = document.getElementById("tech_3");
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

tech_1.addEventListener("click", () => {
  document.getElementById("launch__type").innerHTML = "THE TERMINOLOGY…";
  document.getElementById("launch__name").innerHTML = "LAUNCH VEHICLE";
  document.getElementById(
    "launch__desc"
  ).innerHTML = `A launch vehicle or carrier rocket is a
  rocket-propelled vehicle used to carry a payload from
  Earth's surface to space, usually to Earth orbit or
  beyond. Our WEB-X carrier rocket is the most powerful in
  operation. Standing 150 metres tall, it's quite an
  awe-inspiring sight on the launch pad!`;
  document.getElementById("launch_vehicle_image").src =
    "images/technology/image-launch-vehicle-portrait.jpg";
  handleImagetChange(
    mobilescreen,
    "images/technology/image-launch-vehicle-landscape.jpg"
  );
});

tech_2.addEventListener("click", () => {
  document.getElementById("launch__type").innerHTML = "THE TERMINOLOGY…";
  document.getElementById("launch__name").innerHTML = "SPACEPORT";
  document.getElementById("launch__desc").innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  document.getElementById("launch_vehicle_image").src =
    "images/technology/image-spaceport-portrait.jpg";
  handleImagetChange(
    mobilescreen,
    "images/technology/image-spaceport-landscape.jpg"
  );
});

tech_3.addEventListener("click", () => {
  document.getElementById("launch__type").innerHTML = "THE TERMINOLOGY…";
  document.getElementById("launch__name").innerHTML = "SPACE CAPSULE";
  document.getElementById("launch__desc").innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  document.getElementById("launch_vehicle_image").src =
    "images/technology/image-space-capsule-portrait.jpg";
  handleImagetChange(
    mobilescreen,
    "images/technology/image-space-capsule-landscape.jpg"
  );
});
menu_open.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "block";
  event.preventDefault();
});
menu_close.addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.display = "none";
  event.preventDefault();
});

for (var i = 0; i < tech.length; i++) {
  tech[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-tech");
    current[0].className = current[0].className.replace(" active-tech", "");
    this.className += " active-tech";
    event.preventDefault();
  });
}

// Create a condition that targets viewports at least 768px wide
const mobilescreen = window.matchMedia("(max-width: 768px)");

function handleImagetChange(e, source) {
  // Check if the media query is true
  if (e.matches) {
    document.getElementById("launch_vehicle_image").src = source;
  }
}
mobilescreen.addListener(handleImagetChange);

// Initial check
handleImagetChange(
  mobilescreen,
  "images/technology/image-launch-vehicle-landscape.jpg"
);
