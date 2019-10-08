const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.required');
const emailInput = document.querySelector('.form input[name=email]');
const phoneInput = document.querySelector('.form input[name=phone]');
const passwordInput = document.querySelector('.form input[name=password]');
const repeatInput = document.querySelector('.form input[name=repeat]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  resetErrorMessage();

  requiredInput();
  validationEmail();
  validationPhone();
  repeatPassword();
}

const resetErrorMessage = () => {
  const errors = form.querySelectorAll('.error');
  errors.forEach(error => error.remove());
};

const createErrorMessage = (input, message) => {
  const error = document.createElement('p');
  error.className = 'error';
  error.textContent = message;
  input.after(error);
};

const requiredInput = () =>
  inputs.forEach(input => {
    if (input.value) return;
    const requiredMessage = 'Это поле обязательно к заполнению';
    createErrorMessage(input, requiredMessage);
  });

const validationEmail = () => {
  const validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(
    emailInput.value,
  );
  if (validEmail) return;
  const validEmailMessage = 'Введите валидный email';
  createErrorMessage(emailInput, validEmailMessage);
};

const validationPhone = () => {
  const validPhone = /^([+]{0,1})([0-9]{10,12})$/.test(phoneInput.value);
  if (validPhone) return;
  const validPhoneMessage = 'Введите реальный номер телефона';
  createErrorMessage(phoneInput, validPhoneMessage);
};

const repeatPassword = () => {
  if (passwordInput.value === repeatInput.value) return;
  const repPas = 'Пароли должны совпадать';
  createErrorMessage(repeatInput, repPas);
};
