const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  startButton.disabled = true;
  stopButton.disabled = false;
}
function formatTime(elapsedTime) {
  const milisecond = Math.floor((elapsedTime % 1000) / 10);
  const second = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minute = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hour ? (hour > 9 ? hour : "0" + hour) : "00") +
    ":" +
    (minute ? (minute > 9 ? minute : "0" + minute) : "00") +
    ":" +
    (second ? (second > 9 ? second : "0" + second) : "00") +
    "." +
    (milisecond > 9 ? milisecond : "0" + milisecond)
  );
}
function stopTimer() {
  clearInterval(timerInterval);

  startButton.disabled = false;
  stopButton.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.textContent = "00:00:00.00";
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
