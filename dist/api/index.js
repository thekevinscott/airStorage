"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _errors = require("../utils/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const root = "http://api.airstorage.io";
const root = "http://localhost:5050";

const api = options => {
  return (0, _axios2.default)(options).then(resp => {
    if (resp.data === undefined) {
      throw "Missing data response";
    }
    return resp.data;
  }).catch(error => {
    if (error.response) {
      throw new _errors.ClientError(error.response.data, error.response.status, options);
    }

    if (typeof error === "object") {
      throw new Error(JSON.stringify(error));
    } else {
      throw new Error(error);
    }
  });
};

exports.default = api;