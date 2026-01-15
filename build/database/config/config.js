"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = _interopRequireDefault(require("../../config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  "development": {
    "username": _config["default"].dbUser,
    "password": _config["default"].dbPassword,
    "database": _config["default"].dbName,
    "host": _config["default"].dbHost,
    "dialect": "postgres"
  },
  "test": {
    "username": _config["default"].dbUser,
    "password": _config["default"].dbPassword,
    "database": _config["default"].dbName,
    "host": _config["default"].dbHost,
    "dialect": "mockedString"
  },
  "production": {
    "username": _config["default"].dbUser,
    "password": _config["default"].dbPassword,
    "database": _config["default"].dbName,
    "host": _config["default"].dbHost,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        rejectUnauthorized: false
      }
    }
  }
};