let inchesName = document.querySelector('.inches__name');
let inchesInput = document.querySelectorAll('#inches__input');
const changeInches = () => {
  inchesInput.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      inchesName.textContent = btn.value;
    })
  })
};

let colorsName = document.querySelector('.colors__name');
let colorsInput = document.querySelectorAll('.colors__input');

const changeColors = () => {
  colorsInput.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      colorsName.textContent = btn.value;
    })
  });
};

let itemButton = document.querySelectorAll('.item__button__icon');

const changeOptionsGoods = () => {
  itemButton.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('optional__remove');
    })
  });
}

changeOptionsGoods();
changeInches();
changeColors();

