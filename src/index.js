/* index.js */

import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js" 
import "./styles.css";

const content = document.querySelector("#content");
let currentModule = "home";

// Default module
loadHome();

// Tab-switching logic for buttons
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  if (currentModule === "home") {
    return;
  }
  content.innerHTML = "";
  currentModule = "home";
  loadHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  if (currentModule === "menu") {
    return;
  }
  content.innerHTML = "";
  currentModule = "menu";
  loadMenu();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
  if (currentModule === "about") {
    return;
  }
  content.innerHTML = "";
  currentModule = "about";
  loadAbout();
});