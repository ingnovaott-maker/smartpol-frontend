"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRoles = void 0;
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var checkRoles = exports.checkRoles = function checkRoles() {
  for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
    roles[_key] = arguments[_key];
  }
  return function (req, res, next) {
    var user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(_boom["default"].forbidden('No cuenta con permsisos para acceder a este recurso'));
    }
  };
};