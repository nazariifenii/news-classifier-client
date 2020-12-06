import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { alertService, classificatorService } from "../_services";

function Classificator() {
  const [text, setText] = useState("");

  const classifyNews = (params) => {
    alertService.info("Your article is fake");
  };

  return (
    <section className="vh-100">
      <div className="container">
        <div class="form-group d-flex flex-column justify-content-start pt-4">
          <h1 className="display-4">News classificator</h1>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            id="newsTitleLabel"
          ></input>
          <textarea
            placeholder="Text"
            class="form-control mb-4"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button
            class="btn btn-outline-primary btn-lg"
            href="classificator"
            type="button"
            onClick={classifyNews}
          >
            Classify text
          </button>
        </div>
      </div>
    </section>
  );
}

export { Classificator };
