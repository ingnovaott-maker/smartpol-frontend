"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _departamentController = require("../controllers/departamentController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var departamentController = new _departamentController.DepartamentController();
router.get("/", _passport["default"].authenticate("jwt", {
  session: false
}), function (req, res) {
  return departamentController.getAll(req, res);
});
var _default = exports["default"] = router;