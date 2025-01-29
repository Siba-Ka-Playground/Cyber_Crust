let mode = document.querySelector("#icon"); //Specifies mode button
let body = document.querySelector("body"); //Specifies body
let nav = document.querySelector("nav"); //Specifies nav_bar
let welcome = document.querySelector(".welcome"); //Specifies Welcome Note
let rdMap = document.querySelector(".rd-map"); // Specifies Roadmap heading
let currmode = "light";

// On clicking Mode_Icon this function works (Dark Mode/Light Mode)
const onMode = () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    nav.classList.add("nav_bar_dark");
    nav.classList.remove("nav_bar");
    icon.src = "light.png";
    welcome.classList.add("welcome_d");
    welcome.classList.remove("welcome");
    rdMap.classList.add("rd-map-d");
    rdMap.classList.remove("rd-map");
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    nav.classList.add("nav_bar");
    nav.classList.remove("nav_bar_dark");
    icon.src = "dark.png";
    welcome.classList.remove("welcome_d");
    welcome.classList.add("welcome");
    rdMap.classList.remove("rd-map-d");
    rdMap.classList.add("rd-map");
  }
};
mode.addEventListener("click", onMode);

//Logout
let out = document.getElementById("logout");
function logOut() {
  window.open("index.html", "_self");
}
out.addEventListener("click", logOut);

// Sliding Banner
let currentIndex = 0;
const images = document.querySelectorAll(".slider img");
const slider = document.querySelector(".slider");

function slideImages() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideImages, 5000); // Change image every 5 seconds

//Work of Roadmap Buttons
function basicNetworking() {
  // Interlinking: Open external link in a new tab
  window.open("Documentation.html#bn-head", "_blank");
}
function UpcomingNotes() {
  alert("Documentation Coming Soon....");
}
