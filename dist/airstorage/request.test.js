"use strict";

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock("../api", () => (url, method, params) => new Promise((resolve, reject) => {
  params(resolve, reject);
  // fn(resolve, reject);
}));

describe("request", () => {
  test("that if a request returns successfully, callback is called with a null error and the response", done => {
    const _params = {
      foo: "bar"
    };
    (0, _request2.default)({
      url: "foo",
      method: "get",
      params: resolve => resolve(_params),
      callback: (err, resp) => {
        expect(err).toEqual(null);
        expect(resp).toEqual(_params);
        done();
      }
    });
  });

  test("that if a request throws, callback is called with the error and no response", done => {
    const error = "foo";
    (0, _request2.default)({
      url: "foo",
      method: "get",
      params: (resolve, reject) => reject(error),
      callback: (err, resp) => {
        expect(err).toEqual("foo");
        expect(resp).toEqual(null);
        done();
      }
    });
  });
});