// Store the Pomodoro Elements
import { pomodoroObj } from "./pomodoro-object";

const resetPomodoroObj = () => {
  pomodoroObj.pomodoro = undefined;
  pomodoroObj.minutesTotalSession = 25;
  pomodoroObj.secondsTotalSession = 1500;
  pomodoroObj.minutesTotalBreak = 5;
  pomodoroObj.secondsTotalBreak = 300;
  pomodoroObj.secondsToCountdown = 60;
  pomodoroObj.minutesTotalSessionAfterStop = undefined;
  pomodoroObj.minutesTotalBreakAfterStop = undefined;
  pomodoroObj.justOneExecution = undefined;
};

export default resetPomodoroObj;
