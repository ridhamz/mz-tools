import { CustomError } from './custom-error';
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    serializeError(): {
        message: string;
    }[];
}
