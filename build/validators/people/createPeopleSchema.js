"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var createPeopleSchema = _joi["default"].object({
  identificationNumber: _joi["default"].string().min(4).required(),
  name: _joi["default"].string().required(),
  lastName: _joi["default"].string().required(),
  cellPhone: _joi["default"].string().optional().allow(null, ''),
  phone: _joi["default"].string().optional().allow(null, ''),
  departamentId: _joi["default"].number().min(1).required(),
  municipalityId: _joi["default"].number().min(1).required(),
  neighborhood: _joi["default"].string().optional().allow(null, ''),
  sidewalk: _joi["default"].string().optional().allow(null, ''),
  address: _joi["default"].string().optional().allow(null, ''),
  birthdate: _joi["default"].string().optional().allow(null),
  email: _joi["default"].string().email().optional().allow(null, ''),
  leaderId: _joi["default"].number().min(1).optional(),
  candidateId: _joi["default"].number().min(1).optional(),
  voteplaceId: _joi["default"].number().min(1).optional().allow(null),
  table: _joi["default"].number().optional().allow(null),
  gender: _joi["default"].string().required(),
  role: _joi["default"].string().required(),
  bloodType: _joi["default"].string().optional().allow(null, ''),
  occupation: _joi["default"].string().optional().allow(null, ''),
  profession: _joi["default"].string().optional().allow(null, ''),
  population: _joi["default"].string().optional().allow(null, ''),
  academicProfile: _joi["default"].string().optional().allow(null, ''),
  description: _joi["default"].string().optional().allow(null, ''),
  observations: _joi["default"].string().optional().allow(null, ''),
  politicalState: _joi["default"].string().optional().allow(null, ''),
  isVoted: _joi["default"].optional(),
  votedDate: _joi["default"].optional()
}).messages({
  'number.base': 'El campo {#label} debe ser un número.',
  'number.min': 'El campo {#label} debe ser un número mayor que cero',
  'any.required': '{ #label } es obligatorio',
  'string.empty': '{ #label } no puede estar vacio',
  'string.base': '{ #label } debe ser una cadena de texto',
  'string.email': 'El campo {#label} debe ser una dirección de correo electrónico válida'
});
var _default = exports["default"] = createPeopleSchema;