const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-num');
    if (value !== null) {
      screen.value += value;
    }
  });
});

equalBtn.addEventListener('click', () => {
  try {
    if (screen.value === '') return;
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = 'Error';
  }
});

clearBtn.addEventListener('click', () => {
  screen.value = '';
});
