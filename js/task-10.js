const refs = {
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

refs.createBtn.addEventListener("click", clickOnCreateBtn);
refs.destroyBtn.addEventListener("click", clickOnDestroyBtn);

function clickOnCreateBtn(event) {
  createBoxes(refs.input.value);
}

function clickOnDestroyBtn(event) {
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  const divArray = [];
  const width = 30;
  const height = 30;
  let addValue = 0;

  for (let index = 0; index < amount; index++) {
    const divEl = document.createElement(`div`);
    divEl.classList.add(`box`);
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = width + addValue + "px";
    divEl.style.height = height + addValue + "px";
    addValue += 10;
    divArray.push(divEl);
  }

  refs.boxes.append(...divArray);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
