import passport from "passport";
import { localStrategy } from './strategies/localStrategie.js';
import { jwtStrategy } from './strategies/jwtStrategie.js';

passport.use(localStrategy);
passport.use(jwtStrategy);