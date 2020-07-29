import elementsDOM from "./elements-DOM";
import renderSessionMinutes from "./render-session-minutes";
import renderBreakMinutes from "./render-break-minutes";
import renderTimerMinutes from "./render-timer-minutes";

// Initializate the Pomodoro Timer
const init = () => {
  // Set the Timer display minutes and seconds
  renderTimerMinutes();
  elementsDOM.timerDisplayedSeconds.textContent = "00";

  renderSessionMinutes();
  renderBreakMinutes();

  // Enable Session -, Session +, Break - and Break + buttons if disabled before
  elementsDOM.minusPlusButtons.forEach((item, index) => {
    elementsDOM.minusPlusButtons[index].removeAttribute("disabled");

    // Enable play button if disabled before
    elementsDOM.playButton.removeAttribute("disabled");

    // Cf. Play Button
    elementsDOM.justOneExecution = true;
  });
};

export default init;
