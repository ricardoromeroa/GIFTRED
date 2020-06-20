import React from "react";
import ReactDOM from "react-dom";

// Import Styles Css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/material-dashboard-react.css?v=1.9.0";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
