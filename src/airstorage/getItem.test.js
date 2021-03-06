import getItem from "./getItem";
import { MissingArgumentError } from "../utils/errors";

import * as request from "./request";

describe("getItem", () => {
  test("that it throws if key is missing", (done) => {
    try {
      getItem();
    } catch(err) {
      expect(err.name).toEqual(MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'getItem': 1 argument required, but only 0 present`);
      done();
    }
  });

  test("that it calls request if both values are present", () => {
    const callback = () => {};
    const key = "foo";

    request.default = jest.fn();
    getItem(key, callback);

    const expected = {
      callback,
      url: `/get/${key}`,
    };

    expect(request.default).toBeCalledWith(expected);
  });
});

