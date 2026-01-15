"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _peopleController = require("../controllers/peopleController.js");
var _requestValidator = require("../middlewares/requestValidator.js");
var _filterPeople = require("../middlewares/filterPeople.js");
var _verifyPeopleByIdentification = require("../middlewares/verifyPeopleByIdentification.js");
var _checkPeopleBeforeCreate = require("../middlewares/checkPeopleBeforeCreate.js");
var _checkRoles = require("../middlewares/checkRoles.js");
var _rolesEnum = require("../../utils/enums/rolesEnum.js");
var _createPeopleSchema = _interopRequireDefault(require("../../validators/people/createPeopleSchema.js"));
var _filterPeopleSchema = require("../../validators/people/filterPeopleSchema.js");
var _updatePeopleSchema = require("../../validators/people/updatePeopleSchema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//schemas

var router = _express["default"].Router();
var LIDER = _rolesEnum.ROLES_OBJECT.LIDER,
  ADMINISTRADOR = _rolesEnum.ROLES_OBJECT.ADMINISTRADOR,
  CANDIDATO = _rolesEnum.ROLES_OBJECT.CANDIDATO,
  CANDIDATO_PRINCIPAL = _rolesEnum.ROLES_OBJECT.CANDIDATO_PRINCIPAL,
  DIGITADOR = _rolesEnum.ROLES_OBJECT.DIGITADOR;
var peopleController = new _peopleController.PeopleController();
router.post("/", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), _checkPeopleBeforeCreate.checkPeopleBeforeCreate, (0, _requestValidator.validateRequest)(_createPeopleSchema["default"], "body"), function (req, res, next) {
  return peopleController.createWithUser(req, res, next);
});
router.put("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), (0, _requestValidator.validateRequest)(_updatePeopleSchema.idUpdatePeople, "params"), (0, _requestValidator.validateRequest)(_updatePeopleSchema.updatePeopleSchema, "body"), function (req, res, next) {
  return peopleController.update(req, res, next);
});
router.get("/identification/:identification", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), _verifyPeopleByIdentification.verifyPeople, function (req, res, next) {
  return peopleController.findByIdentification(req, res, next);
});
router.get("/search/:identification/paginate", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.findByIdentificationPaginated(req, res, next);
});
router.get("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.findById(req, res, next);
});
router.get("/", _passport["default"].authenticate("jwt", {
  session: false
}), function (req, res, next) {
  return peopleController.findByCampaign(req, res, next);
});
router.get("/find/filter", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), (0, _requestValidator.validateRequest)(_filterPeopleSchema.filterPeopleSchema, "query"), (0, _filterPeople.validateFilterPeople)(), function (req, res, next) {
  return peopleController.findByFilter(req, res, next);
});
router.get("/export/excel", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), (0, _requestValidator.validateRequest)(_filterPeopleSchema.filterPeopleSchema, "query"), (0, _filterPeople.validateFilterPeople)(), function (req, res, next) {
  return peopleController.exportToExcel(req, res, next);
});
router.put("/:id/report-vote", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, DIGITADOR, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL), (0, _requestValidator.validateRequest)(_updatePeopleSchema.idUpdatePeople, "params"), (0, _requestValidator.validateRequest)(_updatePeopleSchema.reportVotePeople, "body"), function (req, res, next) {
  return peopleController.reportVote(req, res, next);
});

//informes
router.get("/report/general", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL, CANDIDATO, LIDER, DIGITADOR), function (req, res, next) {
  return peopleController.generateGeneralReport(req, res, next);
});
router.get("/report/general/candidates", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.generateGeneralReportByCandidates(req, res, next);
});
router.get("/report/general/vote-places", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.generateGeneralReportByVotePlaces(req, res, next);
});
router.get("/report/general/political-parties", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.generateGeneralReportByPoliticParty(req, res, next);
});
router.get("/report/general/neighborhoods", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.generateGeneralReportByNeighborhoods(req, res, next);
});
router.get("/report/general/leaders", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(ADMINISTRADOR, CANDIDATO_PRINCIPAL), function (req, res, next) {
  return peopleController.generateGeneralReportByLeaders(req, res, next);
});
var _default = exports["default"] = router;