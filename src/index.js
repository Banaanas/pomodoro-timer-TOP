// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.css";
import "./styles/normalize.css";

import init from "./js/init";

// Import Images
import tomatoIconSrc from "./images/tomato.svg";
import upIconSrc from "./images/arrow-up.svg";
import downIconSrc from "./images/arrow-down.svg";
import playIconSrc from "./images/play.svg";
import resetIconSrc from "./images/reset.svg";
import pauseIconSrc from "./images/pause.svg";
import stopIconSrc from "./images/stop.svg";

import addAllEventListeners from "./js/addAllEventListeners";

// Set Images src
const allIcons = document.querySelectorAll("img");
allIcons[0].src = upIconSrc;
allIcons[1].src = downIconSrc;
allIcons[2].src = upIconSrc;
allIcons[3].src = downIconSrc;
allIcons[4].src = tomatoIconSrc;
allIcons[5].src = playIconSrc;
allIcons[6].src = resetIconSrc;
allIcons[7].src = pauseIconSrc;
allIcons[8].src = stopIconSrc;

// Initialize the Pomodoro Timer page
init();
addAllEventListeners();
