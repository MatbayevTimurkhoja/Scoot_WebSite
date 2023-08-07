"Use Strict"

let Header = document.querySelector(".header");
let Loading = document.querySelector(".loader-box");

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    Loading.style.display = "none";
  },2000)
});