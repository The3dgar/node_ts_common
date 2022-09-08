import { Request, Response, NextFunction } from 'express';
import { TokenService } from '../../../services/src/auth/services/token-service';

export interface CurrentUser {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: CurrentUser;
    }
  }
}

// interface CustomReq extends Request {
//   currentUser?: CurrentUser;
// }

export const CurrentUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = await TokenService.verify<CurrentUser>(req.session.jwt);
    req.currentUser = payload;
  } catch (error) {}

  next();
};
