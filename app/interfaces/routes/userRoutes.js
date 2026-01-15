import express from "express";
import passport from "passport";
import { UserController } from "../controllers/userController.js";
import { checkRoles } from "../middlewares/checkRoles.js";

import { ROLES_OBJECT } from "../../utils/enums/rolesEnum.js";
const router = express.Router();
const userController = new UserController();
const { LIDER, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL, DIGITADOR } =
  ROLES_OBJECT;

router.get(
  "/role/:role",
  passport.authenticate("jwt", { session: false }),
  checkRoles(LIDER, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL, DIGITADOR),
  (req, res, next) => userController.getByRole(req, res, next)
);

router.put("/change-password", (req, res, next) => userController.changePassword(req, res, next));

export default router;
