import jwt from 'jsonwebtoken';

export class TokenService {
  static async generate(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });
  }

  static async verify<T>(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET! as string) as T;
  }
}
