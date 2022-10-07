import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  reason = 'Access denied!!!';
  constructor() {
    super('Access denied!!!');
    // only because we are extending a built in class
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
