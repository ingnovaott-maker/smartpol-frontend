import express from "express";
import passport from "passport";
import { VotePlaceController } from "../controllers/votePlaceController.js";

const router = express.Router();
const votePlaceController = new VotePlaceController();

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) =>
  votePlaceController.getAll(req, res)
);

export default router;
