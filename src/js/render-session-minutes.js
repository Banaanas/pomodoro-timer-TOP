import elementsDOM from "./elements-DOM";
import { pomodoroObj } from "./pomodoro-object";

// Display the Session Minutes number to the DOM
const renderSessionMinutes = () => {
  elementsDOM.sessionDisplayedNumber.textContent =
    pomodoroObj.minutesTotalSession;
};

export default renderSessionMinutes;
