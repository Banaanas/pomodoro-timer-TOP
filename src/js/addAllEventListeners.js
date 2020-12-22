import elementsDOM from "./elements-DOM";
import { pomodoroObj } from "./pomodoro-object";
import pomodoroSession from "./pomodoro-session";
import init from "./init";
import renderSessionMinutes from "./render-session-minutes";
import renderBreakMinutes from "./render-break-minutes";
import renderTimerMinutes from "./render-timer-minutes";
import resetPomodoroObj from "./reset-pomodoro-object";
import renderMinuteWord from "./render-minute-word";

const addAllEventListeners = () => {
  // Play Button - Event Listener
  elementsDOM.playButton.addEventListener("click", () => {
    // justOneExecution has been assigned an undefined value during the initialization.
    // This IF condition will only get executed once.
    // minutesTotalSessionAfterStop and minutesTotalBreakAfterStop should remain constant after
    // the Play Button has been pushed one. This way, we can use Play and Pause Buttons multiple
    // times, and Stop Button will still return the initial minutesTotalSessionAfterStop and
    // minutesTotalBreakAfterStop beginning values.
    if (pomodoroObj.justOneExecution === undefined) {
      pomodoroObj.justOneExecution = true;
      pomodoroObj.minutesTotalSessionAfterStop =
        pomodoroObj.minutesTotalSession;
      pomodoroObj.minutesTotalBreakAfterStop = pomodoroObj.minutesTotalBreak;
    }

    // Disable Session -, Session +, Break - and Break +
    elementsDOM.minusPlusButtons.forEach((item, index) => {
      elementsDOM.minusPlusButtons[index].disabled = "true";
    });

    // Disable Play Button
    elementsDOM.playButton.disabled = "true";

    // Launch the timer
    pomodoroObj.pomodoro = setInterval(pomodoroSession, 1000);
  });

  // Reset Button Event Listener
  elementsDOM.resetButton.addEventListener("click", () => {
    clearInterval(pomodoroObj.pomodoro);
    resetPomodoroObj();
    init();
    renderMinuteWord();

    elementsDOM.timerTitle.innerHTML = "Timer";
  });

  // Pause Button - Event Listener
  elementsDOM.pauseButton.addEventListener("click", () => {
    clearInterval(pomodoroObj.pomodoro);

    // Enable play button if disabled before
    elementsDOM.playButton.removeAttribute("disabled");
  });

  // Stop Button - Event Listener
  elementsDOM.stopButton.addEventListener("click", () => {
    if (pomodoroObj.justOneExecution === undefined) return;

    clearInterval(pomodoroObj.pomodoro);
    init();

    elementsDOM.timerTitle.innerHTML = "Timer";

    pomodoroObj.minutesTotalSession = pomodoroObj.minutesTotalSessionAfterStop;
    pomodoroObj.minutesTotalBreak = pomodoroObj.minutesTotalBreakAfterStop;

    renderSessionMinutes();
    renderBreakMinutes();
    renderTimerMinutes();
    renderMinuteWord();

    pomodoroObj.secondsToCountdown = 60;
    pomodoroObj.secondsTotalSession = pomodoroObj.minutesTotalSession * 60;
    pomodoroObj.secondsTotalBreak = pomodoroObj.minutesTotalBreak * 60;
  });

  // Increase Session minutes number displayed - Event Listener
  elementsDOM.sessionPlus.addEventListener("click", () => {
    pomodoroObj.minutesTotalSession += 1;
    elementsDOM.sessionDisplayedNumber.textContent =
      pomodoroObj.minutesTotalSession;

    // Update secondsTotalSession
    pomodoroObj.secondsTotalSession = pomodoroObj.minutesTotalSession * 60;

    renderSessionMinutes();
    renderTimerMinutes();
    renderMinuteWord();
  });

  // Decrease Session minutes number displayed - Event Listener
  elementsDOM.sessionMinus.addEventListener("click", () => {
    if (pomodoroObj.minutesTotalSession <= 1) return;
    pomodoroObj.minutesTotalSession -= 1;
    elementsDOM.sessionDisplayedNumber.textContent =
      pomodoroObj.minutesTotalSession;

    // Update secondsTotalSession
    pomodoroObj.secondsTotalSession = pomodoroObj.minutesTotalSession * 60;

    renderSessionMinutes();
    renderTimerMinutes();
    renderMinuteWord();
  });

  // Increase Break number minutes displayed
  elementsDOM.breakPlus.addEventListener("click", () => {
    pomodoroObj.minutesTotalBreak += 1;

    // Update secondsTotalBreak
    pomodoroObj.secondsTotalBreak = pomodoroObj.minutesTotalBreak * 60;

    renderBreakMinutes();
    renderMinuteWord();
  });

  // Decrease Break minutes number displayed
  elementsDOM.breakMinus.addEventListener("click", () => {
    if (pomodoroObj.minutesTotalBreak > 1) {
      pomodoroObj.minutesTotalBreak -= 1;

      // Update secondsTotalBreak
      pomodoroObj.secondsTotalBreak = pomodoroObj.minutesTotalBreak * 60;

      renderBreakMinutes();
      renderMinuteWord();
    }
  });
};

export default addAllEventListeners;
