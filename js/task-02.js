const inputFontSizeControlRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

const handleValueInput = ({ target: { value } }) => {
  spanTextRef.style.fontSize = `${value}px`;
};

spanTextRef.style.fontSize = `${inputFontSizeControlRef.value}px`;

inputFontSizeControlRef.addEventListener('input', handleValueInput);
