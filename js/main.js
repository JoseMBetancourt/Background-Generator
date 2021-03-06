var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomButton = document.getElementById("random");
var bg = document.getElementById("bg");

function changeColor() {
  bg.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = bg.style.background + ";";
}

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

function randomColors() {
  color1.value = "#" + genRanHex(6);
  color2.value = "#" + genRanHex(6);
  changeColor();
}
color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

randomButton.addEventListener("click", randomColors);
