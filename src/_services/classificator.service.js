import { fetchWrapper } from "../_helpers";
import { alertService } from "../_services/alert.service";
// import config from "config";

// const baseUrl = `${config.apiUrl}/classificator`;
const baseUrl = `http://localhost:4000/classificator`;

export const classificatorService = {
  processText,
};

function processText(text) {
  return fetchWrapper
    .put(`${baseUrl}/process-text`, { text: text })
    .then((resp) => {
      alertService.success("Text processing success");
      return resp;
    });
}
