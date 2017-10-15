import { MissingArgumentError } from "../utils/errors";
import request from "./request";

const removeItem = (key, callback) => {
  if (!key) {
    throw new MissingArgumentError("removeItem", 1, 0);
  }

  return request({
    url: `/remove/${key}`,
    method: "delete",
    params: {
      key,
    },
    callback,
  });
};

export default removeItem;
