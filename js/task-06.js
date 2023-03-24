const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('blur', (event) => {
if (event.currentTarget.value.length === Number(textInputEl.dataset.length)) {
    textInputEl.classList.add('valid');
    textInputEl.classList.remove('invalid');
} else {
    textInputEl.classList.add('invalid');
    textInputEl.classList.remove('valid');
}
});