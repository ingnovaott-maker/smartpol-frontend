import { Response } from "../middlewares/response.js";
import { singToken } from '../../utils/auth/jwt/jwtUtils.js';
export class AuthController {
  async login(req, res, next) {
    try {
        const token = singToken(req.user);
        const data = {
            user: req.user,
            token
        }
      res.status(200).json(Response.ok(data, 200));
    } catch (error) {
      next(error);
    }
  }
}
