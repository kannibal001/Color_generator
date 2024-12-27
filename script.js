const buttonElement = document.querySelector(".button");
const textElement = document.querySelector(".text");
const boxColorElement = document.querySelector(".box-color");
const hotbarElement = document.querySelector(".hotbar");
const colorDivElements = document.querySelectorAll(".colorDiv");
const copyColorElement = document.querySelector("#copyColor");

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
    rgbColor = event.target.style.background;
    color = rgbToHex(rgbColor);
    textElement.textContent = color;
    boxColorElement.style.background = color;
  });
});

textElement.addEventListener("click", () => {
  navigator.clipboard.writeText(color);
  copyColor.style.visibility = "visible";

  setTimeout(() => {
    copyColor.style.visibility = "hidden";
  }, 2000);
});

function rgbToHex(rgb) {
  rgbColor = rgb.replace("rgb(", "").replace(")", "").split(", ");
  r = rgbColor[0];
  g = rgbColor[1];
  b = rgbColor[2];

  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
