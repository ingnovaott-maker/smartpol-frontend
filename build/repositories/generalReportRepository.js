"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralReportRepository = void 0;
var _sequelize = require("sequelize");
var _sequelize2 = _interopRequireDefault(require("../database/sequelize.js"));
var _rolesEnum = require("../utils/enums/rolesEnum.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GeneralReportRepository = exports.GeneralReportRepository = /*#__PURE__*/function () {
  function GeneralReportRepository() {
    _classCallCheck(this, GeneralReportRepository);
  }
  return _createClass(GeneralReportRepository, [{
    key: "countVoters",
    value: function () {
      var _countVoters = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(campaignId) {
        var People;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              People = _sequelize2["default"].models.People;
              _context.next = 3;
              return People.count({
                where: {
                  userId: null,
                  campaignId: campaignId
                }
              });
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function countVoters(_x) {
        return _countVoters.apply(this, arguments);
      }
      return countVoters;
    }()
  }, {
    key: "countCandidates",
    value: function () {
      var _countCandidates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(campaignId) {
        var Candidate;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              Candidate = _sequelize2["default"].models.Candidate;
              _context2.next = 3;
              return Candidate.count({
                where: {
                  campaignId: campaignId
                }
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function countCandidates(_x2) {
        return _countCandidates.apply(this, arguments);
      }
      return countCandidates;
    }()
  }, {
    key: "countRegisteredVotes",
    value: function () {
      var _countRegisteredVotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(campaignId) {
        var People;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              People = _sequelize2["default"].models.People;
              _context3.next = 3;
              return People.count({
                where: {
                  userId: null,
                  isVoted: true,
                  campaignId: campaignId
                }
              });
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function countRegisteredVotes(_x3) {
        return _countRegisteredVotes.apply(this, arguments);
      }
      return countRegisteredVotes;
    }()
  }, {
    key: "countPendingVotes",
    value: function () {
      var _countPendingVotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(campaignId) {
        var People;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              People = _sequelize2["default"].models.People;
              _context4.next = 3;
              return People.count({
                where: _defineProperty({
                  userId: null,
                  campaignId: campaignId
                }, _sequelize.Op.or, [{
                  isVoted: false
                }, {
                  isVoted: null
                }])
              });
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function countPendingVotes(_x4) {
        return _countPendingVotes.apply(this, arguments);
      }
      return countPendingVotes;
    }()
  }, {
    key: "countLeaders",
    value: function () {
      var _countLeaders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(campaignId) {
        var User;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              User = _sequelize2["default"].models.User;
              _context5.next = 3;
              return User.count({
                where: {
                  campaignId: campaignId,
                  role: _rolesEnum.ROLES_OBJECT.LIDER
                }
              });
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function countLeaders(_x5) {
        return _countLeaders.apply(this, arguments);
      }
      return countLeaders;
    }()
  }, {
    key: "voteCountByCandidate",
    value: function () {
      var _voteCountByCandidate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(campaignId) {
        var queryString;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              queryString = "SELECT \n    can.id,\n    can.identification_number,\n    can.name, can.last_name,\n    COUNT(p.id) inscritos,\n    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, \n    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes\n    FROM candidates can\n    INNER JOIN people p ON p.candidate_id = can.id\n    WHERE p.user_id IS NULL\n    AND p.campaign_id=".concat(campaignId, "\n    GROUP BY can.id");
              _context6.next = 3;
              return _sequelize2["default"].query(queryString, {
                raw: true,
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              return _context6.abrupt("return", _context6.sent);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function voteCountByCandidate(_x6) {
        return _voteCountByCandidate.apply(this, arguments);
      }
      return voteCountByCandidate;
    }()
  }, {
    key: "voteCountByVotePlace",
    value: function () {
      var _voteCountByVotePlace = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(campaignId) {
        var queryString;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              queryString = "SELECT \n    vp.id,\n    vp.name,\n    COUNT(p.id) inscritos,\n    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, \n    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes\n    FROM vote_places vp\n    INNER JOIN people p ON p.vote_place_id = vp.id\n    WHERE p.user_id IS NULL\n    AND p.campaign_id=".concat(campaignId, "\n    GROUP BY vp.id");
              _context7.next = 3;
              return _sequelize2["default"].query(queryString, {
                raw: true,
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              return _context7.abrupt("return", _context7.sent);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function voteCountByVotePlace(_x7) {
        return _voteCountByVotePlace.apply(this, arguments);
      }
      return voteCountByVotePlace;
    }()
  }, {
    key: "voteCountByPoliticParty",
    value: function () {
      var _voteCountByPoliticParty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(campaignId) {
        var queryString;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              //AND can.politic_party=${politicparty?.toUpperCase()}
              queryString = "SELECT \n    can.politic_party,\n    COUNT(p.id) inscritos,\n    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, \n    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes\n    FROM candidates can\n    INNER JOIN people p ON p.candidate_id = can.id\n    WHERE p.user_id IS NULL\n    AND p.campaign_id=".concat(campaignId, "\n    GROUP BY can.politic_party");
              _context8.next = 3;
              return _sequelize2["default"].query(queryString, {
                raw: true,
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              return _context8.abrupt("return", _context8.sent);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function voteCountByPoliticParty(_x8) {
        return _voteCountByPoliticParty.apply(this, arguments);
      }
      return voteCountByPoliticParty;
    }()
  }, {
    key: "voteCountByNeighborhood",
    value: function () {
      var _voteCountByNeighborhood = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(campaignId) {
        var queryString;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              queryString = "SELECT \n    p.neighborhood,\n    COUNT(p.id) inscritos,\n    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, \n    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes\n    FROM people p\n    WHERE p.user_id IS NULL\n    AND p.neighborhood <> ''\n    AND p.campaign_id=".concat(campaignId, "\n    GROUP BY p.neighborhood");
              _context9.next = 3;
              return _sequelize2["default"].query(queryString, {
                raw: true,
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              return _context9.abrupt("return", _context9.sent);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function voteCountByNeighborhood(_x9) {
        return _voteCountByNeighborhood.apply(this, arguments);
      }
      return voteCountByNeighborhood;
    }()
  }, {
    key: "voteCountByLeader",
    value: function () {
      var _voteCountByLeader = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(campaignId) {
        var queryString;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              queryString = "SELECT \n    us.name,\n    us.role,\n    COUNT(p.id) inscritos,\n    SUM(CASE WHEN p.is_voted=TRUE THEN 1 ELSE 0 END) AS reportados, \n    SUM(CASE WHEN (p.is_voted=FALSE OR p.is_voted IS NULL) THEN 1 ELSE 0 END) AS pendientes\n    FROM users us\n    INNER JOIN people p ON p.leader_id = us.id\n    WHERE p.user_id IS NULL\n    AND p.campaign_id=".concat(campaignId, "\n    GROUP BY us.id");
              _context10.next = 3;
              return _sequelize2["default"].query(queryString, {
                raw: true,
                type: _sequelize.QueryTypes.SELECT
              });
            case 3:
              return _context10.abrupt("return", _context10.sent);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function voteCountByLeader(_x10) {
        return _voteCountByLeader.apply(this, arguments);
      }
      return voteCountByLeader;
    }()
  }]);
}();