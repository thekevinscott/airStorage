"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class ClientError extends Error {
  constructor(message, status, ...rest) {
    super(message, ...rest);

    this.name = "ClientError";
    this.message = message;
    this.status = status;
    this.date = new Date();
    this.rest = this.rest;
  }
}
exports.default = ClientError;