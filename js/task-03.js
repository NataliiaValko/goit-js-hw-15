const loginFormRef = document.querySelector('.login-form');

const handleLoginFormSubmit = event => {
  event.preventDefault();

  const {
    target: {
      elements: {
        email: { value: email },
        password: { value: password },
      },
    },
  } = event;

  if (!email.trim() || !password.trim()) {
    alert('All fields must be filled out.');
    return;
  }

  console.log({ email, password });

  event.target.reset();
};

loginFormRef.addEventListener('submit', handleLoginFormSubmit);
