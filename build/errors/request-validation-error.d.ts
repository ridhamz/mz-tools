import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
export declare class RequestValidationError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeError(): {
        message: any;
        field: string;
    }[];
}
