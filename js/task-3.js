const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const name = input.value.replace(/^\s+|\s+$/g, '');
  output.textContent = name === '' ? 'Anonymous' : name;
});