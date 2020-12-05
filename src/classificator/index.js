import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { classificatorService } from "../_services";

function Classificator() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Класифікатор новин</h1>
      <TextField
        onChange={(event) => setText(event.target.value)}
        id="outlined-multiline-static"
        label="Вставити текст"
        multiline
        rows={6}
        fullWidth={true}
        defaultValue={text}
        variant="outlined"
      />
      <Button
        color={"primary"}
        onClick={() => {
          classificatorService.processText(text);
        }}
        variant={"contained"}
      >
        Класифікувати
      </Button>
    </div>
  );
}

export { Classificator };
