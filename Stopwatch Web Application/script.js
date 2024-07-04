let mins = 0;
let seconds = 0;
let tens = 0;
let interval = null;

const startButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const resetButton = document.querySelector('.btn-reset');
const timeDisplay = document.querySelector('p');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  interval = setInterval(() => {
    tens++;
    if (tens >= 100) {
      seconds++;
      tens = 0;
    }
    if (seconds >= 60) {
      mins++;
      seconds = 0;
    }
    updateDisplay();
  }, 10);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  mins = 0;
  seconds = 0;
  tens = 0;
  updateDisplay();
  clearInterval(interval);
}

function updateDisplay() {
  const minsDisplay = document.querySelector('.mins');
  const secondsDisplay = document.querySelector('.seconds');
  const tensDisplay = document.querySelector('.tens');

  minsDisplay.textContent = pad(mins);
  secondsDisplay.textContent = pad(seconds);
  tensDisplay.textContent = pad(tens);
}

function pad(number) {
  return (number < 10? '0' : '') + number;
}