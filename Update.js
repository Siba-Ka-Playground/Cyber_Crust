// Specifies Dark Mode and Light Mode

let mode = document.querySelector("#icon"); //Specifies mode button
let body = document.querySelector("body"); //Specifies body
let nav = document.querySelector("nav"); //Specifies nav_bar
let about = document.querySelector(".abt"); //Specifies About Page
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
    about.classList.add("abt_D");
    about.classList.remove("abt");
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    nav.classList.add("nav_bar");
    nav.classList.remove("nav_bar_dark");
    icon.src = "dark.png";
    about.classList.remove("abt_D");
    about.classList.add("abt");
  }
};
mode.addEventListener("click", onMode);
