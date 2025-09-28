function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const ChangeColor = document.querySelector(".change-color");
const Color = document.querySelector(".color");

ChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;


  Color.textContent = newColor;
});