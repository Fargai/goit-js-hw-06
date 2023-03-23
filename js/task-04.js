let counterValue = 0;

const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decButton.addEventListener('click', (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incButton.addEventListener('click', (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});