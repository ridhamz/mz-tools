"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super('Not Found');
        this.statusCode = 404;
        // only because we are extending a built in class
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeError() {
        return [
            {
                message: 'Not Found',
            },
        ];
    }
}
exports.NotFoundError = NotFoundError;
