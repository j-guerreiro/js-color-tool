const colorInput = document.querySelector('.color-input');
const colorBoxIn = document.querySelector('.color-box-input');
const colorBoxOut = document.querySelector('.color-box-output');
const errorEl = document.querySelector('#error-message');

// Input listener to set up input box bg color.
colorInput.addEventListener("change", setInputColorBox);
// Input listener to set up input box bg color.

function setInputColorBox() {
  if (colorInput.value[0] != '#' && colorInput.value != '') {
    errorEl.style.display = 'block';
    errorEl.textContent = 'Not a valid hex value!';
    return; // ends execution here.
  }

  if (colorInput.value.length > 3 && colorInput.value[0] == '#') {
    errorEl.style.display = 'none';
    colorBoxIn.style.backgroundColor = colorInput.value;
  }

  // removes '#' character from hex input.
  let hexValue = colorInput.value.slice(1);
  // Transform the hex base number into dec.
  let decValue = parseInt(hexValue, 16);
  console.log(decValue * 0.5);
  colorBoxOut.style.backgroundColor = colorInput.value;

  // todo - find a way to separate the rgb values from the string.
  let rawRGBValue = colorBoxOut.style.backgroundColor;
  let cleanRGBValue = rawRGBValue.slice(4, 17).trim();
}

/* 
Todo:
Add 2 listeners: 
1. Lighten/darken switch
2. Color range
*/

