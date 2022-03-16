import { User } from '../models/user';
import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtSecret } from '../config/constants';

export class UserController {
  getAll(req: Request, res: Response) {
    User.find()
      .exec()
      .then((docs: any) => {
        res.json({
          message: 'get all users',
          users: docs,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).json({ message: 'Error fetching user data' });
      });
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(' ')[1] as string;
      const decode = jwt.verify(token, jwtSecret) as JwtPayload;
      const userId = decode.id;

      User.findById(userId)
        .exec()
        .then((data: any) => {
          console.log(data);
          res.json(data);
        });
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'You must be logged in' });
    }
  }

  generateJWT(id: string, role: string) {
    const token = jwt.sign({ expiresIn: '12h', id: id, role: role }, jwtSecret);
    return token;
  }
}
