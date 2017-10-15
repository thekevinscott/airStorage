"use strict";

var _setItem = require("./setItem");

var _setItem2 = _interopRequireDefault(_setItem);

var _errors = require("../utils/errors");

var _request = require("./request");

var request = _interopRequireWildcard(_request);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("setItem", () => {
  test("that it throws if key is missing", done => {
    try {
      (0, _setItem2.default)();
    } catch (err) {
      expect(err.name).toEqual(_errors.MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'setItem': 2 arguments required, but only 0 present`);
      done();
    }
  });

  test("that it throws if value is missing", done => {
    try {
      (0, _setItem2.default)("foo");
    } catch (err) {
      expect(err.name).toEqual(_errors.MissingArgumentError.name);
      expect(err.message).toEqual(`Failed to execute 'setItem': 2 arguments required, but only 1 present`);
      done();
    }
  });

  test("that it calls request if both values are present", () => {
    const callback = () => {};
    const key = "foo";
    const value = "bar";

    request.default = jest.fn();
    (0, _setItem2.default)(key, value, callback);

    const expected = {
      callback,
      url: "/set",
      method: "post",
      params: {
        key,
        value
      }
    };

    expect(request.default).toBeCalledWith(expected);
  });
});