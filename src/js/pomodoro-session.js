// Sets Session and Break timer
import elementsDOM from "./elements-DOM";
import { pomodoroObj } from "./pomodoro-object";
import renderTimerMinutes from "./render-timer-minutes";

function pomodoroSession() {
  // Focus Time
  if (pomodoroObj.secondsTotalSession > 0) {
    // Change DOM
    elementsDOM.timerTitle.innerHTML = "Focus Time";

    // Decrease seconds
    pomodoroObj.secondsToCountdown -= 1;
    pomodoroObj.secondsTotalSession -= 1;

    // Change minute
    if (pomodoroObj.secondsToCountdown === 59) {
      pomodoroObj.minutesTotalSession -= 1;
      renderTimerMinutes();
    }

    // Display Seconds
    elementsDOM.timerDisplayedSeconds.textContent =
      pomodoroObj.secondsToCountdown;

    // Convert number from 9 to 0 to double-digits beginning with 0
    if (pomodoroObj.secondsToCountdown < 10) {
      elementsDOM.timerDisplayedSeconds.textContent = `0${pomodoroObj.secondsToCountdown}`;
    }

    // Reboot seconds countdown to 60 when equals to 0
    if (pomodoroObj.secondsToCountdown === 0) {
      pomodoroObj.secondsToCountdown = 60;
    }
    // Break Time
  } else if (pomodoroObj.secondsTotalSession === 0) {
    // Change DOM
    elementsDOM.timerTitle.innerHTML = "Break Time";

    // Decrease seconds
    pomodoroObj.secondsToCountdown -= 1;
    pomodoroObj.secondsTotalBreak -= 1;

    // Change minute
    if (pomodoroObj.secondsToCountdown === 59) {
      pomodoroObj.minutesTotalBreak -= 1;
      elementsDOM.timerDisplayedMinutes.textContent =
        pomodoroObj.minutesTotalBreak;
    }

    elementsDOM.timerDisplayedSeconds.textContent =
      pomodoroObj.secondsToCountdown;

    // Convert number from 9 to 0 to double-digits beginning with 0
    if (pomodoroObj.secondsToCountdown < 10) {
      elementsDOM.timerDisplayedSeconds.textContent = `0${pomodoroObj.secondsToCountdown}`;
    }

    if (pomodoroObj.secondsToCountdown === 0) {
      pomodoroObj.secondsToCountdown = 60;
    }

    if (pomodoroObj.secondsTotalBreak === 0) {
      pomodoroObj.minutesTotalSession =
        pomodoroObj.minutesTotalSessionAfterStop;
      pomodoroObj.minutesTotalBreak = pomodoroObj.minutesTotalBreakAfterStop;

      pomodoroObj.secondsTotalSession = pomodoroObj.minutesTotalSession * 60;
      pomodoroObj.secondsTotalBreak = pomodoroObj.minutesTotalBreak * 60;
    }
  }
}

export default pomodoroSession;
