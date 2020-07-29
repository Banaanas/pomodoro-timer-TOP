// Import core.js
import "core-js";
import "regenerator-runtime/runtime";

// Import stylesheets
import "./styles/index.scss";
import "./styles/index.css";
import "./styles/normalize.css";

import init from "./js/init";

import addAllEventListeners from "./js/addAllEventListeners";

// Initializates the Pomodoro Timer page
init();
addAllEventListeners();
