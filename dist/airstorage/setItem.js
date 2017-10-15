"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require("../utils/errors");

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setItem = (key, value, callback) => {
  if (!key) {
    throw new _errors.MissingArgumentError("setItem", 2, 0);
  } else if (!value) {
    throw new _errors.MissingArgumentError("setItem", 2, 1);
  }

  return (0, _request2.default)({
    url: "/set",
    method: "post",
    params: {
      key,
      value
    },
    callback
  });
};

exports.default = setItem;