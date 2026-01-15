"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _config = _interopRequireDefault(require("./config/config.js"));
var _index = require("./models/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var env = process.env.NODE_ENV;
var sequelize = new _sequelize.Sequelize(_config["default"][env]);
(0, _index.setupModels)(sequelize);
var _default = exports["default"] = sequelize;