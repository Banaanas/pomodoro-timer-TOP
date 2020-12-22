import elementsDOM from "./elements-DOM";
import { pomodoroObj } from "./pomodoro-object";

// Display the Session Minutes number to the Timer DOM
const renderTimerMinutes = () => {
  elementsDOM.timerDisplayedMinutes.textContent =
    pomodoroObj.minutesTotalSession;
};

export default renderTimerMinutes;
