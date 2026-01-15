"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SummaryPeopleDTO = void 0;
var _dateFormat = require("../../../utils/date/dateFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SummaryPeopleDTO = exports.SummaryPeopleDTO = /*#__PURE__*/function () {
  function SummaryPeopleDTO() {
    _classCallCheck(this, SummaryPeopleDTO);
  }
  return _createClass(SummaryPeopleDTO, null, [{
    key: "create",
    value: function create(people) {
      var _people$user, _people$leader, _people$leader2, _people$leader3, _people$candidate, _people$candidate2, _people$candidate3, _people$departament, _people$departament2, _people$municipality, _people$municipality2, _people$voteplace, _people$voteplace2, _people$voteplace3, _people$voteplace4;
      if (!people) return {};
      return {
        id: people === null || people === void 0 ? void 0 : people.id,
        identificationNumber: people === null || people === void 0 ? void 0 : people.identificationNumber,
        name: people === null || people === void 0 ? void 0 : people.name,
        lastName: people === null || people === void 0 ? void 0 : people.lastName,
        cellPhone: people === null || people === void 0 ? void 0 : people.cellPhone,
        phone: people === null || people === void 0 ? void 0 : people.phone,
        departamentId: people === null || people === void 0 ? void 0 : people.departamentId,
        municipalityId: people === null || people === void 0 ? void 0 : people.municipalityId,
        neighborhood: people === null || people === void 0 ? void 0 : people.neighborhood,
        sidewalk: people === null || people === void 0 ? void 0 : people.sidewalk,
        address: people === null || people === void 0 ? void 0 : people.address,
        birthdate: _dateFormat.DateFormat.yyyyMMDD(people === null || people === void 0 ? void 0 : people.birthdate),
        email: people === null || people === void 0 ? void 0 : people.email,
        leaderId: people === null || people === void 0 ? void 0 : people.leaderId,
        candidateId: people === null || people === void 0 ? void 0 : people.candidateId,
        votePlace: people === null || people === void 0 ? void 0 : people.votePlace,
        table: people === null || people === void 0 ? void 0 : people.table,
        gender: people === null || people === void 0 ? void 0 : people.gender,
        bloodType: people === null || people === void 0 ? void 0 : people.bloodType,
        occupation: people === null || people === void 0 ? void 0 : people.occupation,
        profession: people === null || people === void 0 ? void 0 : people.profession,
        population: people === null || people === void 0 ? void 0 : people.population,
        academicProfile: people === null || people === void 0 ? void 0 : people.academicProfile,
        description: people === null || people === void 0 ? void 0 : people.description,
        observations: people === null || people === void 0 ? void 0 : people.observations,
        politicalState: people === null || people === void 0 ? void 0 : people.politicalState,
        userId: people === null || people === void 0 ? void 0 : people.userId,
        role: people === null || people === void 0 || (_people$user = people.user) === null || _people$user === void 0 ? void 0 : _people$user.role,
        isVoted: (people === null || people === void 0 ? void 0 : people.isVoted) === null ? false : people.isVoted,
        votedDate: _dateFormat.DateFormat.yyyyMMDDHHMMSS(people === null || people === void 0 ? void 0 : people.votedDate),
        leader: !(people !== null && people !== void 0 && people.leader) ? null : {
          id: people === null || people === void 0 || (_people$leader = people.leader) === null || _people$leader === void 0 ? void 0 : _people$leader.id,
          name: people === null || people === void 0 || (_people$leader2 = people.leader) === null || _people$leader2 === void 0 ? void 0 : _people$leader2.name,
          username: people === null || people === void 0 || (_people$leader3 = people.leader) === null || _people$leader3 === void 0 ? void 0 : _people$leader3.username
        },
        candidate: !(people !== null && people !== void 0 && people.candidate) ? null : {
          id: people === null || people === void 0 || (_people$candidate = people.candidate) === null || _people$candidate === void 0 ? void 0 : _people$candidate.id,
          name: people === null || people === void 0 || (_people$candidate2 = people.candidate) === null || _people$candidate2 === void 0 ? void 0 : _people$candidate2.name,
          lastName: people === null || people === void 0 || (_people$candidate3 = people.candidate) === null || _people$candidate3 === void 0 ? void 0 : _people$candidate3.lastName
        },
        departament: {
          id: people === null || people === void 0 || (_people$departament = people.departament) === null || _people$departament === void 0 ? void 0 : _people$departament.id,
          name: people === null || people === void 0 || (_people$departament2 = people.departament) === null || _people$departament2 === void 0 ? void 0 : _people$departament2.name
        },
        municipality: {
          id: people === null || people === void 0 || (_people$municipality = people.municipality) === null || _people$municipality === void 0 ? void 0 : _people$municipality.id,
          name: people === null || people === void 0 || (_people$municipality2 = people.municipality) === null || _people$municipality2 === void 0 ? void 0 : _people$municipality2.name
        },
        voteplace: !(people !== null && people !== void 0 && people.voteplace) ? null : {
          id: people === null || people === void 0 || (_people$voteplace = people.voteplace) === null || _people$voteplace === void 0 ? void 0 : _people$voteplace.id,
          name: people === null || people === void 0 || (_people$voteplace2 = people.voteplace) === null || _people$voteplace2 === void 0 ? void 0 : _people$voteplace2.name,
          table: people === null || people === void 0 || (_people$voteplace3 = people.voteplace) === null || _people$voteplace3 === void 0 ? void 0 : _people$voteplace3.table,
          address: people === null || people === void 0 || (_people$voteplace4 = people.voteplace) === null || _people$voteplace4 === void 0 ? void 0 : _people$voteplace4.address
        }
      };
    }
  }]);
}();