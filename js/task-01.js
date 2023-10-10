const validationInputRef = document.querySelector('#validation-input');

const handleInputBlur = ({ target: { value, dataset } }) => {
  const conditionsLength = Number(dataset.length);

  validationInputRef.classList.add('invalid');

  conditionsLength === value.trim().length
    ? validationInputRef.classList.replace('invalid', 'valid')
    : validationInputRef.classList.replace('valid', 'invalid');
};

validationInputRef.addEventListener('blur', handleInputBlur);
