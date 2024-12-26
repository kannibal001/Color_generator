const buttonElement = document.querySelector(".button");
const textElement = document.querySelector(".text");
const boxColorElement = document.querySelector(".box-color");
const hotbarElement = document.querySelector(".hotbar");
const colorDivElements = document.querySelectorAll(".colorDiv");

let color = "#000000";

class randomColor {
  letters = "1234567890abcdef";
  color = "#";
  constructor() {
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}

buttonElement.addEventListener("click", () => {
  color = new randomColor().color;
  textElement.textContent = color;
  boxColorElement.style.background = color;
  const colorDiv = document.createElement("div");
  colorDiv.style.background = color;
  colorDiv.classList.add("colorDiv");
  hotbarElement.append(colorDiv);
  colorDiv.addEventListener("click", (event) => {
    color = event.target.style.background
      .replace("rgb(", "")
      .replace(")", "")
      .split(", ");
    color = rgbToHex(color[0], color[1], color[2]);
    textElement.textContent = color;
    boxColorElement.style.background = color;
  });
});

textElement.addEventListener("click", () => {
  navigator.clipboard.writeText(color);
});

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
