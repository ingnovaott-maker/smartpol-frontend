import express from "express";
import passport from "passport";
import { validateRequest } from "../middlewares/requestValidator.js";
import { MunicipalityController } from "../controllers/municipalityController.js";
import { getByDepartamentSchema } from '../../validators/municipality/getByDepartamentSchema.js';

const router = express.Router();
const municipalityController = new MunicipalityController();

router.get(
  "/:departamentId",
  passport.authenticate("jwt", { session: false }),
  validateRequest(getByDepartamentSchema, "params"),
  (req, res, next) => municipalityController.getByDepartament(req, res, next)
);

export default router;
