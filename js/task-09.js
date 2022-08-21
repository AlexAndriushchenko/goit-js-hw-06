const targetBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");

targetBtn.addEventListener("click", clickOnTarget);

function clickOnTarget(event) {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
