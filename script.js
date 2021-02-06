
(function etchSketch() {
  const field = document.getElementById('game');

  function squareGenerator(amount) {
    const squares = amount * amount;
    for (let i = 0; i < squares; i += 1) {
      const box = document.createElement('div');
      box.classList.add('box');
      field.appendChild(box);
    }
  }

  function createGrid(size) {
    const cssRepeat = `repeat(${size}, 1fr)`;
    field.style.gridTemplateColumns = cssRepeat;
    field.style.gridTemplateRows = cssRepeat;
    squareGenerator(size);
  }


  function newGrid() {
    const number = document.getElementById('size').value;
    const errMsg = document.querySelector('#userinput p');
    if (number < 1 || number > 64) {
      errMsg.style.visibility = 'visible';
      return;
    }
    errMsg.style.visibility = 'hidden';
    while (field.firstChild) {
      field.removeChild(field.firstChild);
    }
    createGrid(number);
  }

  function paintBox(e) {
    if (e.target.classList.contains('black')) return;
    e.target.classList.add('black');
  }

  const button = document.getElementById('reset-field');
  button.addEventListener('click', newGrid);
  field.addEventListener('mouseover', paintBox);

  createGrid(4);
}());
