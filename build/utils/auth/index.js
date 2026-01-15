"use strict";

var _passport = _interopRequireDefault(require("passport"));
var _localStrategie = require("./strategies/localStrategie.js");
var _jwtStrategie = require("./strategies/jwtStrategie.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_passport["default"].use(_localStrategie.localStrategy);
_passport["default"].use(_jwtStrategie.jwtStrategy);