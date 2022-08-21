const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
