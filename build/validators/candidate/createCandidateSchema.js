"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var createCandidateSchema = _joi["default"].object({
  identificationNumber: _joi["default"].string().min(4).required(),
  name: _joi["default"].string().required(),
  lastName: _joi["default"].string().required(),
  email: _joi["default"].string().email().optional().allow(null, ''),
  cellPhone: _joi["default"].string().optional().allow(null, ''),
  address: _joi["default"].string().optional().allow(null, ''),
  politicParty: _joi["default"].string().required(),
  type: _joi["default"].string().required()
}).messages({
  'number.base': 'El campo {#label} debe ser un número.',
  'any.required': '{ #label } es obligatorio',
  'string.empty': '{ #label } no puede estar vacio',
  'string.base': '{ #label } debe ser una cadena de texto',
  'string.email': 'El campo {#label} debe ser una dirección de correo electrónico válida',
  'date.format': 'El campo {#label} debe ser una fecha en formato ISO (YYYY-MM-DD).'
});
var _default = exports["default"] = createCandidateSchema;