"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRequest = void 0;
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var validateRequest = exports.validateRequest = function validateRequest(scahema, property) {
  return function (req, res, next) {
    var data = req[property];
    var _scahema$validate = scahema.validate(data, {
        abortEarly: false
      }),
      error = _scahema$validate.error;
    if (error) {
      next(_boom["default"].badRequest(error));
    }
    next();
  };
};