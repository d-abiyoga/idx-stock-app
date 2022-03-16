import express from 'express';
import passport from 'passport';
import { UserController } from '../controllers/UserController';

export const authRouter = express.Router();

const clientUrl = process.env.NODE_ENV === 'development' ? process.env.CLIENT_URL_DEV : process.env.CLIENT_URL_PROD;
const controller = new UserController();

authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }));
authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  async (req: any, res) => {
    try {
      // console.log(req.user);
      const token = controller.generateJWT(req.user?.id, req.user?.role);
      res.cookie('x-auth-cookie', token).redirect(`${clientUrl}/dashboard`);
    } catch (err) {
      console.error(err);
    }
  },
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'successfully logged out' }).redirect('/');
});

authRouter.get('/failed', (req, res) => {
  res.sendStatus(401).json({
    message: 'authentication failed',
  });
});
