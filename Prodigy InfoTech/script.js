let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');
let lapBtn = document.getElementById('lap-btn');
let lapsContainer = document.getElementById('laps');

let interval;
let elapsedTime = 0;
let running = false;

function formatTime(ms) {
  let seconds = Math.floor(ms / 1000) % 60;
  let minutes = Math.floor(ms / (1000 * 60)) % 60;
  let hours = Math.floor(ms / (1000 * 60 * 60));

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!running) {
    running = true;
    let startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(interval);
}

function resetTimer() {
  running = false;
  clearInterval(interval);
  elapsedTime = 0;
  timerDisplay.textContent = '00:00:00';
  lapsContainer.innerHTML = '';
}

function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsContainer.appendChild(lapItem);
  }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);

  