import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

// this work but you need to use CustomRequest instead of Request whenever you want access to req.currentUser
interface CustomRequest extends Request {
  currentUser?: UserPayload;
}

// global way
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export function currentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.session || !req.session.jwt) return next();
  try {
    const payload = jwt.verify(
      req.session?.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload;
  } catch (error) {}

  next();
}
