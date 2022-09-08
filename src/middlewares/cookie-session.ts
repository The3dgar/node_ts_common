import cookieSession from 'cookie-session';

export const cookieSessionMiddleware = cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== "test",
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
});
