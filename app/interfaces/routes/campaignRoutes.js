import express from "express";
import passport from "passport";
import { validateRequest } from "../middlewares/requestValidator.js";
import { CampaIgnController } from "../controllers/campaignController.js";
import { verifyCandidate } from "../middlewares/verifyCandidateByIdentification.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES_OBJECT } from "../../utils/enums/rolesEnum.js";

//schemas
//import createCandidateSchema from "../../validators/candidate/createCandidateSchema.js";

const router = express.Router();
const campaIgnController = new CampaIgnController();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ROLES_OBJECT.PROPIETARIO, ROLES_OBJECT.PROPIETARIO),
  //validateRequest(createCandidateSchema, "body"),
  verifyCandidate,
  (req, res, next) => campaIgnController.create(req, res, next)
);

export default router;
