import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./_helpers";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// import { configureFakeBackend } from "./_helpers";
// configureFakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
