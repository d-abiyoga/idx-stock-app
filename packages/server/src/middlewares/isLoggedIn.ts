import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { jwtSecret } from '../config/constants';

const ensureLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;

    jwt.verify(token, jwtSecret, function (err: VerifyErrors | null, decoded: any) {
      console.log(`user with id ${decoded.id} has accessed`);
    });
    next();
  } catch (err) {
    res.status(401).json({ message: 'Please login first' });
    console.error(err);
  }
};

export default ensureLoggedIn;
