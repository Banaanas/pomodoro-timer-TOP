// Set plural/singular form for minute(s) word display
import { pomodoroObj } from "./pomodoro-object";
import elementsDOM from "./elements-DOM";

const renderMinuteWord = () => {
  if (pomodoroObj.secondsTotalSession === 60) {
    elementsDOM.sessionMinuteWord.textContent = "minute";
  } else {
    elementsDOM.sessionMinuteWord.textContent = "minutes";
  }
  if (pomodoroObj.secondsTotalBreak === 60) {
    elementsDOM.breakMinuteWord.textContent = "minute";
  } else {
    elementsDOM.breakMinuteWord.textContent = "minutes";
  }
};

export default renderMinuteWord;
