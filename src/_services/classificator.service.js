import { fetchWrapper } from "../_helpers";
import { alertService } from "../_services/alert.service";
import config from "../config.json";

const baseUrl = `${config.apiUrl}/classificator`;

export const classificatorService = {
  processText,
};

function processText(title, text) {
  return fetchWrapper
    .post(`${baseUrl}/process-text`, { title: title, text: text })
    .then((resp) => {
      alertService.success("Text processing success", resp);
      return resp;
    });
}
