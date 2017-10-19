import { MissingArgumentError } from "../utils/errors";
import request from "./request";

const setItem = (key, value, callback) => {
  if (!key) {
    throw new MissingArgumentError("setItem", 2, 0);
  } else if (!value) {
    throw new MissingArgumentError("setItem", 2, 1);
  }

  return request({
    url: "/set",
    method: "post",
    data: {
      key,
      value,
    },
    callback,
  });
};

export default setItem;
