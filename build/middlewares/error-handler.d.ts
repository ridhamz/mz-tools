import { NextFunction, Request, Response } from 'express';
export declare function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
