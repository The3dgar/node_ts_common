import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const ErrorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({ errors: [{ message: 'something went wrong' }] });
};
