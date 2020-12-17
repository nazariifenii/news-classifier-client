import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { history } from "./_helpers";
import { accountService } from "./_services";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// import { configureFakeBackend } from "./_helpers";
// configureFakeBackend();

accountService.refreshToken().finally(startApp);

function startApp() {
  render(
    <React.StrictMode>
      <HashRouter history={history}>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
