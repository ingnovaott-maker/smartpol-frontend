import express from "express";
import passport from "passport";

const router = express.Router();
import { AuthController } from '../controllers/authController.js';


const authController = new AuthController();
router.post(
  "/login",
  passport.authenticate('local', {session: false }),
  (req, res, next) => authController.login(req, res, next)
);

export default router;
