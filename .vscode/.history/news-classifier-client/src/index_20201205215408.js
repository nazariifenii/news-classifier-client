import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./_helpers";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();