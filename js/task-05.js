function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');
const blockBoxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
  const markup = Array.from({ length: amount }, (_, index) => {
    return `<div style="width: ${30 + 10 * index}px; height: ${
      30 + 10 * index
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }).join('');

  blockBoxesRef.innerHTML = markup;
};

const destroyBoxes = () => (blockBoxesRef.innerHTML = '');

const handleDestroyClick = () => {
  destroyBoxes();
};

const handleCreateClick = () => {
  const { value, min, max } = inputRef;

  if (Number(value) < min || Number(value) > max) {
    inputRef.style.border = '2px solid red';
    return;
  }

  createBoxes(Number(value));
  inputRef.style.border = '1px inset rgb(118, 118, 118)';
  return;
};

buttonCreateRef.addEventListener('click', handleCreateClick);
buttonDestroyRef.addEventListener('click', handleDestroyClick);
