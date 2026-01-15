"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByDepartamentSchema = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var getByDepartamentSchema = exports.getByDepartamentSchema = _joi["default"].object({
  departamentId: _joi["default"].number().required().min(1)
}).messages({
  'number.base': 'El campo {#label} debe ser un número.',
  'any.required': '{ #label } es obligatorio',
  'number.min': '{ #label } debe ser mayor o igual a 1'
});