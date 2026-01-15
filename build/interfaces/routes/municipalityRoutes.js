"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _requestValidator = require("../middlewares/requestValidator.js");
var _municipalityController = require("../controllers/municipalityController.js");
var _getByDepartamentSchema = require("../../validators/municipality/getByDepartamentSchema.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var municipalityController = new _municipalityController.MunicipalityController();
router.get("/:departamentId", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _requestValidator.validateRequest)(_getByDepartamentSchema.getByDepartamentSchema, "params"), function (req, res, next) {
  return municipalityController.getByDepartament(req, res, next);
});
var _default = exports["default"] = router;