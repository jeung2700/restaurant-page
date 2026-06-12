import "./styles.css";
import createHome from "./home.js";
import createAbout from "./about.js";
import createMenu from "./menu.js";

const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    content.innerHTML = "";
    if (btn.textContent === "Home") content.appendChild(createHome());
    if (btn.textContent === "Menu") content.appendChild(createMenu());
    if (btn.textContent === "About") content.appendChild(createAbout());
  });
});

content.appendChild(createHome());
