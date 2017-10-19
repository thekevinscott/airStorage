"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("../api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const request = ({
  url,
  method,
  params,
  callback
}) => (0, _api2.default)(url, { method, params }).then(resp => {
  if (callback) {
    callback(null, resp);
  }
}).catch(err => {
  if (callback) {
    callback(err, null);
  }
});

exports.default = request;