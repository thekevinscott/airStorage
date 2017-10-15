import request from "./request";
jest.mock("../api", () => (url, method, params) => new Promise((resolve, reject) => {
  params(resolve, reject);
  // fn(resolve, reject);
}));

describe("request", () => {
  test("that if a request returns successfully, callback is called with a null error and the response", (done) => {
    const params = {
      foo: "bar",
    };
    request({
      url: "foo",
      method: "get",
      params: resolve => resolve(params),
      callback: (err, resp) => {
        expect(err).toEqual(null);
        expect(resp).toEqual(params);
        done();
      },
    });
  });

  test("that if a request throws, callback is called with the error and no response", (done) => {
    const error = "foo";
    request({
      url: "foo",
      method: "get",
      params: (resolve, reject) => reject(error),
      callback: (err, resp) => {
        expect(err).toEqual("foo");
        expect(resp).toEqual(null);
        done();
      },
    });
  });
});
