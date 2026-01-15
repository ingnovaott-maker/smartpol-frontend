"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _requestValidator = require("../middlewares/requestValidator.js");
var _campaignController = require("../controllers/campaignController.js");
var _verifyCandidateByIdentification = require("../middlewares/verifyCandidateByIdentification.js");
var _checkRoles = require("../middlewares/checkRoles.js");
var _rolesEnum = require("../../utils/enums/rolesEnum.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//schemas
//import createCandidateSchema from "../../validators/candidate/createCandidateSchema.js";

var router = _express["default"].Router();
var campaIgnController = new _campaignController.CampaIgnController();
router.post("/", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(_rolesEnum.ROLES_OBJECT.PROPIETARIO, _rolesEnum.ROLES_OBJECT.PROPIETARIO),
//validateRequest(createCandidateSchema, "body"),
_verifyCandidateByIdentification.verifyCandidate, function (req, res, next) {
  return campaIgnController.create(req, res, next);
});
var _default = exports["default"] = router;