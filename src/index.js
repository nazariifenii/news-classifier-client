import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { history } from "./_helpers";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// import { configureFakeBackend } from "./_helpers";
// configureFakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter history={history}>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
