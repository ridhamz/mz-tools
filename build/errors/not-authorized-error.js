"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthorizedError extends custom_error_1.CustomError {
    constructor() {
        super('Access denied!!!');
        this.statusCode = 401;
        this.reason = 'Access denied!!!';
        // only because we are extending a built in class
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeError() {
        return [{ message: this.reason }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
