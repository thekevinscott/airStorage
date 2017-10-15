import ClientError from "./ClientError";

export default class MissingArgumentError extends ClientError {
  constructor(fn, expectedArgs, foundArgs, ...rest) {
    const message = `Failed to execute '${fn}': ${expectedArgs} argument${expectedArgs === 1 ? "" : "s"} required, but only ${foundArgs} present`;
    super(message, ...rest);

    this.name = "MissingArgumentError";
    this.message = message;
    // this.code = code;
    this.date = new Date();
  }
}
