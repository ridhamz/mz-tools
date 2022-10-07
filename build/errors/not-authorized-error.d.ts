import { CustomError } from './custom-error';
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeError(): {
        message: string;
    }[];
}
