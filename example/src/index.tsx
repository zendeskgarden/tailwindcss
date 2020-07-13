import React from "react";
import ReactDOM from "react-dom";

/**
 * Configure polyfill for :focus-visible functionality
 */
import "focus-visible";

/**
 * Include global TailwindCSS utilities and Garden Bedrock styling
 */
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
