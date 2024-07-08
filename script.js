let stopwatchInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function startStop() {
  if (running) {
    clearInterval(stopwatchInterval);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(stopwatchInterval);
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("startStop").textContent = "Start";
  running = false;
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  let minutes = Math.floor(elapsedTime / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000));

  document.getElementById("minutes").textContent = padTime(minutes);
  document.getElementById("seconds").textContent = padTime(seconds);
  document.getElementById("milliseconds").textContent = padMilliseconds(milliseconds);
}

function padTime(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function padMilliseconds(val) {
  let valString = val + "";
  if (valString.length < 3) {
    if (valString.length < 2) {
      return "00" + valString;
    } else {
      return "0" + valString;
    }
  } else {
    return valString;
  }
}
