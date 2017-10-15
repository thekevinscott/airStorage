"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClientError = require("./ClientError");

var _ClientError2 = _interopRequireDefault(_ClientError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MissingArgumentError extends _ClientError2.default {
  constructor(fn, expectedArgs, foundArgs, ...rest) {
    const message = `Failed to execute '${fn}': ${expectedArgs} argument${expectedArgs === 1 ? "" : "s"} required, but only ${foundArgs} present`;
    super(message, ...rest);

    this.name = "MissingArgumentError";
    this.message = message;
    // this.code = code;
    this.date = new Date();
  }
}
exports.default = MissingArgumentError;