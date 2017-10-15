"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require("../utils/errors");

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getItem = (key, callback) => {
  if (!key) {
    throw new _errors.MissingArgumentError("getItem", 1, 0);
  }

  return (0, _request2.default)({
    url: `/get/${key}`,
    callback
  });
};

exports.default = getItem;