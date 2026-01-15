import express from "express";
import passport from "passport";
import { DepartamentController } from "../controllers/departamentController.js";

const router = express.Router();
const departamentController = new DepartamentController();

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) =>
  departamentController.getAll(req, res)
);

export default router;
