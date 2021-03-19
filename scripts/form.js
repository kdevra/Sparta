// inputs float
const allInputs = document.querySelectorAll('[float-input]');

allInputs.forEach((input) => {
  if (input.value != '') {
    input.classList.add('float');
  }
  input.addEventListener('focusout', () => {
    if (input.value.length > 0) {
      input.classList.add('float');
    } else {
      input.classList.remove('float');
    }
  });
});

allInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.remove('float');
  });
});
