"use strict";

var form = document.querySelector('.form');
var inputs = form.querySelectorAll('.required');
var emailInput = document.querySelector('.form input[name=email]');
var phoneInput = document.querySelector('.form input[name=phone]');
var passwordInput = document.querySelector('.form input[name=password]');
var repeatInput = document.querySelector('.form input[name=repeat]');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  resetErrorMessage();
  requiredInput();
  validationEmail();
  validationPhone();
  repeatPassword();
}

var resetErrorMessage = function resetErrorMessage() {
  var errors = form.querySelectorAll('.error');
  errors.forEach(function (error) {
    return error.remove();
  });
};

var createErrorMessage = function createErrorMessage(input, message) {
  var error = document.createElement('p');
  error.className = 'error';
  error.textContent = message;
  input.after(error);
};

var requiredInput = function requiredInput() {
  return inputs.forEach(function (input) {
    if (input.value) return;
    var requiredMessage = 'Это поле обязательно к заполнению';
    createErrorMessage(input, requiredMessage);
  });
};

var validationEmail = function validationEmail() {
  var validEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(emailInput.value);
  if (validEmail) return;
  var validEmailMessage = 'Введите валидный email';
  createErrorMessage(emailInput, validEmailMessage);
};

var validationPhone = function validationPhone() {
  var validPhone = /^([+]{0,1})([0-9]{10,12})$/.test(phoneInput.value);
  if (validPhone) return;
  var validPhoneMessage = 'Введите реальный номер телефона';
  createErrorMessage(phoneInput, validPhoneMessage);
};

var repeatPassword = function repeatPassword() {
  if (passwordInput.value === repeatInput.value) return;
  var repPas = 'Пароли должны совпадать';
  createErrorMessage(repeatInput, repPas);
};