import axios from "axios";
import { ClientError } from "../utils/errors";

const root = "http://api.airstorage.io";
// const root = "http://localhost:5050";

const api = (options) => {
  return axios({
    ...options,
    url: `${root}${options.url}`,
  }).then((resp) => {
    if (resp.data === undefined) {
      throw "Missing data response";
    }
    return resp.data;
  }).catch(error => {
    if (error.response) {
      throw new ClientError(error.response.data, error.response.status, options);
    }

    if (typeof error === "object") {
      throw new Error(JSON.stringify(error));
    } else {
      throw new Error(error);
    }
  });
}

export default api;
