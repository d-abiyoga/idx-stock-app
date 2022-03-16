import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { jwtSecret } from '../config/constants';

const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;
    jwt.verify(token, jwtSecret, (err: VerifyErrors | null, decoded: any) => {
      if (decoded.role === 'admin') {
        console.log('passed as admin');
        next();
      } else {
        console.log('not an admin');
        res.sendStatus(401);
      }
      if (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export default ensureAdmin;
