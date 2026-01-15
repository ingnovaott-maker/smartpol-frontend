"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtStrategy = void 0;
var _passportJwt = require("passport-jwt");
var _config = _interopRequireDefault(require("../../../config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var options = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: _config["default"].jwtSecret
};
var jwtStrategy = exports.jwtStrategy = new _passportJwt.Strategy(options, function (payload, done) {
  return done(null, payload);
});