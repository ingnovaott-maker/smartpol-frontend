"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _authController = require("../controllers/authController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var authController = new _authController.AuthController();
router.post("/login", _passport["default"].authenticate('local', {
  session: false
}), function (req, res, next) {
  return authController.login(req, res, next);
});
var _default = exports["default"] = router;