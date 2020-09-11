const form = document.querySelector('form');
const formNotification = document.querySelector('.my-form-box__form-notification');
const formInputs = document.querySelectorAll('.form-register__inputs');
const passwordInputField = document.getElementById('password');
const confirmPasswordInputField = document.getElementById('confirm-password');
const togglePassword = document.querySelector('#toggle-password');
const togglePassword2 = document.querySelector('#toggle-password2');


// check if inputs are empty
form.addEventListener('submit', e => {
    for (i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value === '') {
            formInputs[i].classList.add('input-red-notification');
            formNotification.innerHTML = 'Proszę uzupełnić wymagane pola';
            e.preventDefault();
            return false;
        } //confirm passwords
        if (passwordInputField.value !== confirmPasswordInputField.value) {
            confirmPasswordInputField.classList.add('input-red-notification');
            formNotification.innerHTML = 'Wprowadź poprawnie potwierdzenie hasła';
            e.preventDefault();
        } else {
            formNotification.innerHTML = 'Witamy!';
        }
    }
});

// reset form and alert
form.addEventListener('reset', e => {
    for (let input of formInputs) {
        input.classList.remove('input-red-notification');
        formNotification.innerHTML = '';
    }
});

// clear red error and a notofication if string in input is correct
form.addEventListener('input', e => {
    for (let input of formInputs) {
        input.classList.remove('input-red-notification');
        formNotification.innerHTML = '';
    }
});

// show/ hide password
togglePassword.addEventListener('click', function (e) {
    const type = passwordInputField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInputField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// show/ hide confirm password
togglePassword2.addEventListener('click', function (e) {
    const type = confirmPasswordInputField.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInputField.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});