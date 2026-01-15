"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _requestValidator = require("../middlewares/requestValidator.js");
var _candidateController = require("../controllers/candidateController.js");
var _verifyCandidateByIdentification = require("../middlewares/verifyCandidateByIdentification.js");
var _checkRoles = require("../middlewares/checkRoles.js");
var _rolesEnum = require("../../utils/enums/rolesEnum.js");
var _createCandidateSchema = _interopRequireDefault(require("../../validators/candidate/createCandidateSchema.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//schemas

var router = _express["default"].Router();
var candidateController = new _candidateController.CandidateController();
router.get("/", _passport["default"].authenticate("jwt", {
  session: false
}), function (req, res) {
  return candidateController.getAll(req, res);
});
router.post("/", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(_rolesEnum.ROLES_OBJECT.PROPIETARIO, _rolesEnum.ROLES_OBJECT.ADMINISTRADOR, _rolesEnum.ROLES_OBJECT.CANDIDATO, _rolesEnum.ROLES_OBJECT.CANDIDATO_PRINCIPAL), (0, _requestValidator.validateRequest)(_createCandidateSchema["default"], "body"), _verifyCandidateByIdentification.verifyCandidate, function (req, res, next) {
  return candidateController.createWithUser(req, res, next);
});
var _default = exports["default"] = router;