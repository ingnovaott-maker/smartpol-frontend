"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateFilterPeople = void 0;
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var validateFilterPeople = exports.validateFilterPeople = function validateFilterPeople() {
  return function (req, res, next) {
    var _req$query = req.query,
      gender = _req$query.gender,
      leaderId = _req$query.leaderId,
      politicalState = _req$query.politicalState,
      candidateId = _req$query.candidateId,
      _req$query$page = _req$query.page,
      page = _req$query$page === void 0 ? 1 : _req$query$page,
      _req$query$pageSize = _req$query.pageSize,
      pageSize = _req$query$pageSize === void 0 ? 100 : _req$query$pageSize;
    var campaignId = req.user.campaignId;
    var filters = {
      gender: gender,
      leader_id: leaderId,
      candidate_id: candidateId,
      political_state: politicalState,
      campaign_id: campaignId,
      page: page,
      pageSize: pageSize
    };
    var countFilter = Object.keys(filters).length;
    Object.entries(filters).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (value === "" || value == null) {
        delete filters[key];
        countFilter -= 1;
      }
    });
    if (countFilter === 0) {
      next(_boom["default"].badRequest("Debe enviar por lo menos un filtro"));
    }
    filters.user_id = null;
    req.query = filters;
    next();
  };
};