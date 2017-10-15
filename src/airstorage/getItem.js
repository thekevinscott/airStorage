import { MissingArgumentError } from "../utils/errors";
import request from "./request";

const getItem = (key, callback) => {
  if (!key) {
    throw new MissingArgumentError("getItem", 1, 0);
  }

  return request({
    url: `/get/${key}`,
    callback,
  });
};

export default getItem;
