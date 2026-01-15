"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPeopleSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var filterPeopleSchema = exports.filterPeopleSchema = _joi["default"].object({
  gender: _joi["default"].string().required().allow(null, ''),
  politicalState: _joi["default"].string().required().allow(null, ''),
  leaderId: _joi["default"].number().required().allow(null, ''),
  candidateId: _joi["default"].number().required().allow(null, ''),
  page: _joi["default"].number().optional(),
  pageSize: _joi["default"].number().optional()
});