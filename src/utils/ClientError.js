export default class ClientError extends Error {
  constructor(message, status, ...rest) {
    super(message, ...rest);

    this.message = message;
    this.status = status;
    this.date = new Date();
    this.rest = this.rest;
  }
}
