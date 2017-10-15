import setItem from "./setItem";
import { MissingArgumentError } from "../utils/errors";

import * as request from "./request";

describe("setItem", () => {
  test("that it throws if key is missing", (done) => {
    try {
      setItem();
    } catch(err) {
      expect(err.name).toEqual(MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'setItem': 2 arguments required, but only 0 present`);
      done();
    }
  });

  test("that it throws if value is missing", (done) => {
    try {
      setItem("foo");
    } catch(err) {
      expect(err.name).toEqual(MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'setItem': 2 arguments required, but only 1 present`);
      done();
    }
  });

  test("that it calls request if both values are present", () => {
    const callback = () => {};
    const key = "foo";
    const value = "bar";

    request.default = jest.fn();
    setItem(key, value, callback);

    const expected = {
      callback,
      url: "/set",
      method: "post",
      params: {
        key,
        value,
      },
    };

    expect(request.default).toBeCalledWith(expected);
  });
});

