import colorsArray from './colorsArray';

function generateRandomColor() {
  const button = document.querySelector('button');
  const body = document.querySelector('body');
  let randomBodyColor =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];
  body.style.backgroundColor = randomBodyColor;
  button.style.backgroundColor = randomBodyColor;
}

export default generateRandomColor;
