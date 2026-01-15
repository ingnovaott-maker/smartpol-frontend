"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../../../config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var singToken = exports.singToken = function singToken(user) {
  var payload = {
    sub: user.id,
    role: user.role,
    campaignId: user.campaignId
  };
  return _jsonwebtoken["default"].sign(payload, _config["default"].jwtSecret, {
    expiresIn: '24h'
  });
};