import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export declare class DatabaseConnectionError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    reason: string;
    constructor(errors: ValidationError[]);
    serializeError(): {
        message: string;
    }[];
}
