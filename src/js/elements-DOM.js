const elementsDOM = {
  timerTitle: document.querySelector("#timer-title"),
  sessionDisplayedNumber: document.querySelector("#session-displayed-number"),
  breakDisplayedNumber: document.querySelector("#break-displayed-number"),
  sessionMinus: document.querySelector("#session-minus"),
  sessionPlus: document.querySelector("#session-plus"),
  breakMinus: document.querySelector("#break-minus"),
  breakPlus: document.querySelector("#break-plus"),
  timerDisplayedMinutes: document.querySelector("#timer-minutes-displayed"),
  timerDisplayedSeconds: document.querySelector("#timer-seconds-displayed"),
  playButton: document.querySelector("#play-button"),
  resetButton: document.querySelector("#reset-button"),
  pauseButton: document.querySelector("#pause-button"),
  stopButton: document.querySelector("#stop-button"),
  minusPlusButtons: document.querySelectorAll(".minus-plus-buttons"), // Select Session -, Session +, Break - and Break + buttons
  sessionMinuteWord: document.querySelector("#session-minute-word"),
  breakMinuteWord: document.querySelector("#break-minute-word"),
};

export default elementsDOM;
