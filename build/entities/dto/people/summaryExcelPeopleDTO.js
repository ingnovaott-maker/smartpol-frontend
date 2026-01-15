"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryExcelPeopleDTO = void 0;
var _dateFormat = require("../../../utils/date/dateFormat.js");
var _rolesEnum = require("../../../utils/enums/rolesEnum.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SummaryExcelPeopleDTO = exports.SummaryExcelPeopleDTO = /*#__PURE__*/function () {
  function SummaryExcelPeopleDTO() {
    _classCallCheck(this, SummaryExcelPeopleDTO);
  }
  return _createClass(SummaryExcelPeopleDTO, null, [{
    key: "create",
    value: function create(people) {
      var _people$candidate, _people$candidate2, _people$voteplace, _people$user$role, _people$user, _people$leader, _people$departament, _people$municipality;
      var candidate = (people === null || people === void 0 || (_people$candidate = people.candidate) === null || _people$candidate === void 0 ? void 0 : _people$candidate.name) + ' ' + (people === null || people === void 0 || (_people$candidate2 = people.candidate) === null || _people$candidate2 === void 0 ? void 0 : _people$candidate2.lastName);
      return {
        Id: people === null || people === void 0 ? void 0 : people.id,
        Identificacion: people === null || people === void 0 ? void 0 : people.identificationNumber,
        Nombres: people === null || people === void 0 ? void 0 : people.name,
        Apellidos: people === null || people === void 0 ? void 0 : people.lastName,
        Celular: people === null || people === void 0 ? void 0 : people.cellPhone,
        Telefono: people === null || people === void 0 ? void 0 : people.phone,
        Barrio: people === null || people === void 0 ? void 0 : people.neighborhood,
        Vereda: people === null || people === void 0 ? void 0 : people.sidewalk,
        Direccion: people === null || people === void 0 ? void 0 : people.address,
        Fecha_Nacimiento: _dateFormat.DateFormat.yyyyMMDD(people === null || people === void 0 ? void 0 : people.birthdate),
        Correo: people === null || people === void 0 ? void 0 : people.email,
        Puesto_Votacion: people === null || people === void 0 || (_people$voteplace = people.voteplace) === null || _people$voteplace === void 0 ? void 0 : _people$voteplace.name,
        Mesa: people === null || people === void 0 ? void 0 : people.table,
        Genero: people === null || people === void 0 ? void 0 : people.gender,
        Tipo_SAngre: people === null || people === void 0 ? void 0 : people.bloodType,
        Ocupacion: people === null || people === void 0 ? void 0 : people.occupation,
        Profesion: people === null || people === void 0 ? void 0 : people.profession,
        Poblacion: people === null || people === void 0 ? void 0 : people.population,
        Perfil_Academico: people === null || people === void 0 ? void 0 : people.academicProfile,
        Descripcion: people === null || people === void 0 ? void 0 : people.description,
        Observaciones: people === null || people === void 0 ? void 0 : people.observations,
        Estado_Politico: people === null || people === void 0 ? void 0 : people.politicalState,
        Rol: (_people$user$role = people === null || people === void 0 || (_people$user = people.user) === null || _people$user === void 0 ? void 0 : _people$user.role) !== null && _people$user$role !== void 0 ? _people$user$role : _rolesEnum.ROLES_OBJECT.VOTANTE,
        Lider: people === null || people === void 0 || (_people$leader = people.leader) === null || _people$leader === void 0 ? void 0 : _people$leader.name,
        Candidato: candidate !== null && candidate !== void 0 ? candidate : 'NULL',
        Departamento: people === null || people === void 0 || (_people$departament = people.departament) === null || _people$departament === void 0 ? void 0 : _people$departament.name,
        Municipio: people === null || people === void 0 || (_people$municipality = people.municipality) === null || _people$municipality === void 0 ? void 0 : _people$municipality.name
      };
    }
  }]);
}();