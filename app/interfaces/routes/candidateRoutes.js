import express from "express";
import passport from "passport";
import { validateRequest } from "../middlewares/requestValidator.js";
import { CandidateController } from "../controllers/candidateController.js";
import { verifyCandidate } from "../middlewares/verifyCandidateByIdentification.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES_OBJECT } from '../../utils/enums/rolesEnum.js';

//schemas
import createCandidateSchema from "../../validators/candidate/createCandidateSchema.js";

const router = express.Router();
const candidateController = new CandidateController();

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) =>
  candidateController.getAll(req, res)
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ROLES_OBJECT.PROPIETARIO, ROLES_OBJECT.ADMINISTRADOR, ROLES_OBJECT.CANDIDATO, ROLES_OBJECT.CANDIDATO_PRINCIPAL),
  validateRequest(createCandidateSchema, "body"),
  verifyCandidate,
  (req, res, next) => candidateController.createWithUser(req, res, next)
);
export default router;
