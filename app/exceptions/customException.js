
import { ERRORS } from './constants.js';
export class CustomException extends Error {
    constructor(message = ERRORS[statusCode], errorName = ERRORS[statusCode], statusCode = 500) {
      super(message);
      this.name = errorName;
      this.statusCode = statusCode;
    }
}
  