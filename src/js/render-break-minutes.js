import elementsDOM from "./elements-DOM";
import { pomodoroObj } from "./pomodoro-object";

// Display the Break Minutes number to the DOM
const renderBreakMinutes = () => {
  elementsDOM.breakDisplayedNumber.textContent = pomodoroObj.minutesTotalBreak;
};

export default renderBreakMinutes;
