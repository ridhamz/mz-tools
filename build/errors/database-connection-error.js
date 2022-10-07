"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseConnectionError extends custom_error_1.CustomError {
    constructor(errors) {
        super('Error connection to database');
        this.errors = errors;
        this.statusCode = 500;
        this.reason = 'Error connecting to database';
        // only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeError() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
