const colorInput = document.querySelector('.color-input');
const colorBoxIn = document.querySelector('.color-box-input');
const errorEl = document.querySelector('#error-message');

// Input listener to set up input box bg color.
colorInput.addEventListener("change", setInputColorBox);

function setInputColorBox() {
  if (colorInput.value[0] != '#' && colorInput.value != '') {
    errorEl.style.display = 'block';
    errorEl.textContent = 'Not a hex value!';
    return; // ends execution here.
  }

  if (colorInput.value.length > 3 && colorInput.value[0] == '#') {
    errorEl.style.display = 'none';
    colorBoxIn.style.backgroundColor = colorInput.value;
  }
}


