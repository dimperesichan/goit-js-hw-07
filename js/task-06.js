const input = document.getElementById('validation-input');
input.addEventListener('blur', checkValueInput);

function checkValueInput (action) {
const lengthValue = this.dataset.length;

action.currentTarget.value.length === Number(lengthValue)
? (input.classList = 'valid') : (input.classList = 'invalid');
}

