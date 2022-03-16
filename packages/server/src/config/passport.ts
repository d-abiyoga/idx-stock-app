import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/user';
import mongoose from 'mongoose';
import { jwtLogin } from './passport-jwt';

export default (): void => {
  passport.initialize();
  passport.session();

  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!googleClientId) return;
  if (!googleClientSecret) return;

  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback',
        passReqToCallback: true,
      },
      async (request, accessToken, refreshToken, profile, done) => {
        const userData = {
          googleId: profile.id,
          displayName: profile.displayName,
        };

        try {
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            done(null, user);
          } else {
            user = User.create({ _id: new mongoose.Types.ObjectId(), ...userData });
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }

        User.find({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.use(jwtLogin);
};
