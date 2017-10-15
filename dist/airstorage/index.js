"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require("../utils/errors");

var _api = require("../api");

var _api2 = _interopRequireDefault(_api);

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

var _setItem = require("./setItem");

var _setItem2 = _interopRequireDefault(_setItem);

var _getItem = require("./getItem");

var _getItem2 = _interopRequireDefault(_getItem);

var _removeItem = require("./removeItem");

var _removeItem2 = _interopRequireDefault(_removeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const airStorage = {
  request: _request2.default,
  setItem: _setItem2.default,
  getItem: _getItem2.default,
  removeItem: _removeItem2.default
};

exports.default = airStorage;