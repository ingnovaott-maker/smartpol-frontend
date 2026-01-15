"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _userController = require("../controllers/userController.js");
var _checkRoles = require("../middlewares/checkRoles.js");
var _rolesEnum = require("../../utils/enums/rolesEnum.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var userController = new _userController.UserController();
var LIDER = _rolesEnum.ROLES_OBJECT.LIDER,
  ADMINISTRADOR = _rolesEnum.ROLES_OBJECT.ADMINISTRADOR,
  CANDIDATO = _rolesEnum.ROLES_OBJECT.CANDIDATO,
  CANDIDATO_PRINCIPAL = _rolesEnum.ROLES_OBJECT.CANDIDATO_PRINCIPAL,
  DIGITADOR = _rolesEnum.ROLES_OBJECT.DIGITADOR;
router.get("/role/:role", _passport["default"].authenticate("jwt", {
  session: false
}), (0, _checkRoles.checkRoles)(LIDER, ADMINISTRADOR, CANDIDATO, CANDIDATO_PRINCIPAL, DIGITADOR), function (req, res, next) {
  return userController.getByRole(req, res, next);
});
router.put("/change-password", function (req, res, next) {
  return userController.changePassword(req, res, next);
});
var _default = exports["default"] = router;