import removeItem from "./removeItem";
import { MissingArgumentError } from "../utils/errors";

import * as request from "./request";

describe("removeItem", () => {
  test("that it throws if key is missing", (done) => {
    try {
      removeItem();
    } catch(err) {
      expect(err.name).toEqual(MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'removeItem': 1 argument required, but only 0 present`);
      done();
    }
  });

  test("that it calls request if both values are present", () => {
    const callback = () => {};
    const key = "foo";

    request.default = jest.fn();
    removeItem(key, callback);

    const expected = {
      callback,
      url: `/remove/${key}`,
      method: "delete",
      params: {
        key,
      },
    };

    expect(request.default).toBeCalledWith(expected);
  });
});

