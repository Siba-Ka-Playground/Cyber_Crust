// Specifies Dark Mode and Light Mode

let mode = document.querySelector("#icon"); //Specifies mode button
let body = document.querySelector("body"); //Specifies body
let nav = document.querySelector("nav"); //Specifies nav_bar
let doc = document.querySelector(".doc"); //Specifies article tag
let currmode = "light";

// On clicking Mode_Icon this function works (Dark Mode/Light Mode)
const onMode = () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    nav.classList.add("nav_bar_dark");
    nav.classList.remove("nav_bar");
    doc.classList.add("doc_D");
    doc.classList.remove("doc");
    icon.src = "light.png";
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    nav.classList.add("nav_bar");
    nav.classList.remove("nav_bar_dark");
    doc.classList.add("doc");
    doc.classList.remove("doc_D");
    icon.src = "dark.png";
  }
};
mode.addEventListener("click", onMode);
