import express from "express";
import passport from "passport";
import { PeopleController } from "../controllers/peopleController.js";
import { validateRequest } from "../middlewares/requestValidator.js";
import { validateFilterPeople } from "../middlewares/filterPeople.js";
import { verifyPeople } from "../middlewares/verifyPeopleByIdentification.js";
import { checkPeopleBeforeCreate } from "../middlewares/checkPeopleBeforeCreate.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES_OBJECT } from '../../utils/enums/rolesEnum.js';

//schemas
import createPeopleSchema from "../../validators/people/createPeopleSchema.js";
import { filterPeopleSchema } from "../../validators/people/filterPeopleSchema.js";
import { updatePeopleSchema, idUpdatePeople, reportVotePeople } from "../../validators/people/updatePeopleSchema.js";

const router = express.Router();
const { LIDER, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL , DIGITADOR} = ROLES_OBJECT;
const peopleController = new PeopleController();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL),
  checkPeopleBeforeCreate,
  validateRequest(createPeopleSchema, "body"),
  (req, res, next) => peopleController.createWithUser(req, res, next)
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR,  CANDIDATO, CANDIDATO_PRINCIPAL),
  validateRequest(idUpdatePeople, "params"),
  validateRequest(updatePeopleSchema, "body"),
  (req, res, next) => peopleController.update(req, res, next)
);

router.get(
  "/identification/:identification",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL),
  verifyPeople,
  (req, res, next) => peopleController.findByIdentification(req, res, next)
);

router.get(
  "/search/:identification/paginate",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.findByIdentificationPaginated(req, res, next)
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.findById(req, res, next)
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => peopleController.findByCampaign(req, res, next)
);

router.get(
  "/find/filter",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  validateRequest(filterPeopleSchema, "query"),
  validateFilterPeople(),
  (req, res, next) => peopleController.findByFilter(req, res, next)
);

router.get(
  "/export/excel",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  validateRequest(filterPeopleSchema, "query"),
  validateFilterPeople(),
  (req, res, next) => peopleController.exportToExcel(req, res, next)
);

router.put(
  "/:id/report-vote",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, DIGITADOR, ADMINISTRADOR,  CANDIDATO, CANDIDATO_PRINCIPAL),
  validateRequest(idUpdatePeople, "params"),
  validateRequest(reportVotePeople, "body"),
  (req, res, next) => peopleController.reportVote(req, res, next)
);


//informes
router.get(
  "/report/general",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL, CANDIDATO, LIDER, DIGITADOR),
  (req, res, next) => peopleController.generateGeneralReport(req, res, next)
);

router.get(
  "/report/general/candidates",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.generateGeneralReportByCandidates(req, res, next)
);

router.get(
  "/report/general/vote-places",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.generateGeneralReportByVotePlaces(req, res, next)
);

router.get(
  "/report/general/political-parties",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.generateGeneralReportByPoliticParty(req, res, next)
);

router.get(
  "/report/general/neighborhoods",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.generateGeneralReportByNeighborhoods(req, res, next)
);

router.get(
  "/report/general/leaders",
  passport.authenticate("jwt", { session: false }),
  checkRoles(ADMINISTRADOR, CANDIDATO_PRINCIPAL),
  (req, res, next) => peopleController.generateGeneralReportByLeaders(req, res, next)
);

export default router;
