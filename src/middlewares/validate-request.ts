import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { ReqValidationError } from '../errors/req-validation-error';

export const validateRequestMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new ReqValidationError(errors.array());
  }

  next();
};
