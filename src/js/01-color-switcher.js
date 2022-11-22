const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBgColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

let interval;
stopBtn.disabled = true;

const startBtnEvent = () => {
  console.log('start');
  startBtn.disabled = true;
  stopBtn.disabled = false;
  interval = setInterval(changeBgColor, 1000);
}

const stopBtnEvent= () => {
  console.log('stop');
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(interval);
}

startBtn.addEventListener('click', startBtnEvent);
stopBtn.addEventListener('click', stopBtnEvent);