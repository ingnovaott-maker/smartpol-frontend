"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleController = void 0;
var _createPeopleAndUserUseCase = require("../../useCases/people/createPeopleAndUserUseCase.js");
var _findByIdUseCase = require("../../useCases/people/findByIdUseCase.js");
var _updatePeopleUseCase = require("../../useCases/people/updatePeopleUseCase.js");
var _findByFilterUseCase = require("../../useCases/people/findByFilterUseCase.js");
var _findByCampaingUseCase = require("../../useCases/people/findByCampaingUseCase.js");
var _findByCreatedByUseCase = require("../../useCases/people/findByCreatedByUseCase.js");
var _reportVoteUseCase = require("../../useCases/people/reportVoteUseCase.js");
var _findByIdentificationUseCase = require("../../useCases/people/findByIdentificationUseCase.js");
var _findByIdentificationPaginateUseCase = require("../../useCases/people/findByIdentificationPaginateUseCase.js");
var _generateGeneralReportUseCase = require("../../useCases/report/generateGeneralReportUseCase.js");
var _generateGeneralReportLeaderUseCase = require("../../useCases/report/generateGeneralReportLeaderUseCase.js");
var _generateGeneralReportCandidateUseCase = require("../../useCases/report/generateGeneralReportCandidateUseCase.js");
var _generateGeneralReportVotePlaceUseCase = require("../../useCases/report/generateGeneralReportVotePlaceUseCase.js");
var _generateGeneralReportPoliticPartyUseCase = require("../../useCases/report/generateGeneralReportPoliticPartyUseCase.js");
var _generateGeneralReportNeighborhoodUseCase = require("../../useCases/report/generateGeneralReportNeighborhoodUseCase.js");
var _response = require("../middlewares/response.js");
var _excelReport = require("../../utils/report/excelReport.js");
var _rolesEnum = require("../../utils/enums/rolesEnum.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //Reports
//
//utils
var PeopleController = exports.PeopleController = /*#__PURE__*/function () {
  function PeopleController() {
    _classCallCheck(this, PeopleController);
    this.createPeopleAndUserUseCase = new _createPeopleAndUserUseCase.CreatePeopleAndUserUseCase();
    this.updatePeopleUseCase = new _updatePeopleUseCase.UpdatePeopleUseCase();
    this.findByFilterUseCase = new _findByFilterUseCase.FindByFilterUseCase();
    this.findPeopleByIdUseCase = new _findByIdUseCase.FindPeopleByIdUseCase();
    this.findPeopleByIdetificationUseCase = new _findByIdentificationUseCase.FindPeopleByIdetificationUseCase();
    this.findPeopleByIdetificationPaginateUseCase = new _findByIdentificationPaginateUseCase.FindPeopleByIdetificationPaginateUseCase();
    this.findByCampaignUseCase = new _findByCampaingUseCase.FindByCampaignUseCase();
    this.findByCreatedByUseCase = new _findByCreatedByUseCase.FindByCreatedByUseCase();
    this.reportVoteUseCase = new _reportVoteUseCase.ReportVoteUseCase();
    this.generateGeneralReportUseCase = new _generateGeneralReportUseCase.GenerateGeneralReportUseCase();
    this.generateGeneralReportLeaderUseCase = new _generateGeneralReportLeaderUseCase.GenerateGeneralReportLeaderUseCase();
    this.generateGeneralReportCandidateUseCase = new _generateGeneralReportCandidateUseCase.GenerateGeneralReportCandidateUseCase();
    this.generateGeneralReportVotePlaceUseCase = new _generateGeneralReportVotePlaceUseCase.GenerateGeneralReportVotePlaceUseCase();
    this.generateGeneralReportPoliticPartyUseCase = new _generateGeneralReportPoliticPartyUseCase.GenerateGeneralReportPoliticPartyUseCase();
    this.generateGeneralReportNeighborhoodUseCase = new _generateGeneralReportNeighborhoodUseCase.GenerateGeneralReportNeighborhoodUseCase();
  }
  return _createClass(PeopleController, [{
    key: "createWithUser",
    value: function () {
      var _createWithUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
        var data, people;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = _objectSpread(_objectSpread({}, req.body), {}, {
                campaignId: req.user.campaignId,
                createdBy: req.user.sub
              });
              _context.next = 4;
              return this.createPeopleAndUserUseCase.execute(data);
            case 4:
              people = _context.sent;
              res.status(201).json(_response.Response.ok(people, 201));
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              next(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function createWithUser(_x, _x2, _x3) {
        return _createWithUser.apply(this, arguments);
      }
      return createWithUser;
    }()
  }, {
    key: "findByIdentification",
    value: function () {
      var _findByIdentification = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
        var identification, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              identification = req.params.identification;
              _context2.next = 4;
              return this.findPeopleByIdetificationUseCase.execute(identification);
            case 4:
              result = _context2.sent;
              res.status(200).json(_response.Response.ok(result));
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 8]]);
      }));
      function findByIdentification(_x4, _x5, _x6) {
        return _findByIdentification.apply(this, arguments);
      }
      return findByIdentification;
    }()
  }, {
    key: "findByIdentificationPaginated",
    value: function () {
      var _findByIdentificationPaginated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
        var identification, _req$query, page, pageSize, campaignId, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              identification = req.params.identification;
              _req$query = req.query, page = _req$query.page, pageSize = _req$query.pageSize;
              campaignId = req.user.campaignId;
              _context3.next = 6;
              return this.findPeopleByIdetificationPaginateUseCase.execute(identification, campaignId, page, pageSize);
            case 6:
              result = _context3.sent;
              res.status(200).json(_response.Response.ok(result));
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              next(_context3.t0);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 10]]);
      }));
      function findByIdentificationPaginated(_x7, _x8, _x9) {
        return _findByIdentificationPaginated.apply(this, arguments);
      }
      return findByIdentificationPaginated;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
        var id, people;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return this.findPeopleByIdUseCase.execute(id);
            case 4:
              people = _context4.sent;
              res.status(200).json(_response.Response.ok(people));
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              next(_context4.t0);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 8]]);
      }));
      function findById(_x10, _x11, _x12) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "findByCampaign",
    value: function () {
      var _findByCampaign = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
        var people, _req$user, campaignId, role, sub, _req$query2, page, pageSize;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _req$user = req.user, campaignId = _req$user.campaignId, role = _req$user.role, sub = _req$user.sub;
              _req$query2 = req.query, page = _req$query2.page, pageSize = _req$query2.pageSize;
              if (!(role === _rolesEnum.ROLES_OBJECT.CANDIDATO)) {
                _context5.next = 9;
                break;
              }
              _context5.next = 6;
              return this.findByCreatedByUseCase.execute(sub, page, pageSize);
            case 6:
              people = _context5.sent;
              _context5.next = 12;
              break;
            case 9:
              _context5.next = 11;
              return this.findByCampaignUseCase.execute(campaignId, page, pageSize);
            case 11:
              people = _context5.sent;
            case 12:
              res.status(200).json(_response.Response.ok(people));
              _context5.next = 18;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              next(_context5.t0);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 15]]);
      }));
      function findByCampaign(_x13, _x14, _x15) {
        return _findByCampaign.apply(this, arguments);
      }
      return findByCampaign;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
        var id, data, peopleUdated;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              data = req.body;
              _context6.next = 5;
              return this.updatePeopleUseCase.execute(id, data);
            case 5:
              peopleUdated = _context6.sent;
              res.status(200).json(_response.Response.ok(peopleUdated));
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              next(_context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 9]]);
      }));
      function update(_x16, _x17, _x18) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "findByFilter",
    value: function () {
      var _findByFilter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
        var query, people;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              query = req.query;
              _context7.next = 4;
              return this.findByFilterUseCase.execute(query);
            case 4:
              people = _context7.sent;
              res.status(200).json(_response.Response.ok(people));
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              next(_context7.t0);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 8]]);
      }));
      function findByFilter(_x19, _x20, _x21) {
        return _findByFilter.apply(this, arguments);
      }
      return findByFilter;
    }()
  }, {
    key: "exportToExcel",
    value: function () {
      var _exportToExcel2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
        var query, people, excelBuffer;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              query = req.query;
              _context8.next = 4;
              return this.findByFilterUseCase.executeReposrt(query);
            case 4:
              people = _context8.sent;
              _context8.next = 7;
              return (0, _excelReport.exportToExcel)(people);
            case 7:
              excelBuffer = _context8.sent;
              // Configura la respuesta para descargar el archivo Excel
              res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
              res.setHeader("Content-Disposition", "attachment; filename=Personas.xlsx");
              res.end(excelBuffer, "binary");
              _context8.next = 16;
              break;
            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              next(_context8.t0);
            case 16:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 13]]);
      }));
      function exportToExcel(_x22, _x23, _x24) {
        return _exportToExcel2.apply(this, arguments);
      }
      return exportToExcel;
    }()
  }, {
    key: "reportVote",
    value: function () {
      var _reportVote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
        var id, data, peopleUdated;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              id = req.params.id;
              data = req.body;
              _context9.next = 5;
              return this.reportVoteUseCase.execute(id, data);
            case 5:
              peopleUdated = _context9.sent;
              res.status(200).json(_response.Response.ok(peopleUdated));
              _context9.next = 12;
              break;
            case 9:
              _context9.prev = 9;
              _context9.t0 = _context9["catch"](0);
              next(_context9.t0);
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[0, 9]]);
      }));
      function reportVote(_x25, _x26, _x27) {
        return _reportVote.apply(this, arguments);
      }
      return reportVote;
    }()
  }, {
    key: "generateGeneralReport",
    value: function () {
      var _generateGeneralReport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              campaignId = req.user.campaignId;
              _context10.next = 4;
              return this.generateGeneralReportUseCase.execute(campaignId);
            case 4:
              result = _context10.sent;
              res.status(200).json(_response.Response.ok(result));
              _context10.next = 11;
              break;
            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](0);
              next(_context10.t0);
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 8]]);
      }));
      function generateGeneralReport(_x28, _x29, _x30) {
        return _generateGeneralReport.apply(this, arguments);
      }
      return generateGeneralReport;
    }()
  }, {
    key: "generateGeneralReportByCandidates",
    value: function () {
      var _generateGeneralReportByCandidates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              campaignId = req.user.campaignId;
              _context11.next = 4;
              return this.generateGeneralReportCandidateUseCase.execute(campaignId);
            case 4:
              result = _context11.sent;
              res.status(200).json(_response.Response.ok(result));
              _context11.next = 11;
              break;
            case 8:
              _context11.prev = 8;
              _context11.t0 = _context11["catch"](0);
              next(_context11.t0);
            case 11:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[0, 8]]);
      }));
      function generateGeneralReportByCandidates(_x31, _x32, _x33) {
        return _generateGeneralReportByCandidates.apply(this, arguments);
      }
      return generateGeneralReportByCandidates;
    }()
  }, {
    key: "generateGeneralReportByVotePlaces",
    value: function () {
      var _generateGeneralReportByVotePlaces = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              campaignId = req.user.campaignId;
              _context12.next = 4;
              return this.generateGeneralReportVotePlaceUseCase.execute(campaignId);
            case 4:
              result = _context12.sent;
              res.status(200).json(_response.Response.ok(result));
              _context12.next = 11;
              break;
            case 8:
              _context12.prev = 8;
              _context12.t0 = _context12["catch"](0);
              next(_context12.t0);
            case 11:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[0, 8]]);
      }));
      function generateGeneralReportByVotePlaces(_x34, _x35, _x36) {
        return _generateGeneralReportByVotePlaces.apply(this, arguments);
      }
      return generateGeneralReportByVotePlaces;
    }()
  }, {
    key: "generateGeneralReportByPoliticParty",
    value: function () {
      var _generateGeneralReportByPoliticParty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              campaignId = req.user.campaignId;
              _context13.next = 4;
              return this.generateGeneralReportPoliticPartyUseCase.execute(campaignId);
            case 4:
              result = _context13.sent;
              res.status(200).json(_response.Response.ok(result));
              _context13.next = 11;
              break;
            case 8:
              _context13.prev = 8;
              _context13.t0 = _context13["catch"](0);
              next(_context13.t0);
            case 11:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[0, 8]]);
      }));
      function generateGeneralReportByPoliticParty(_x37, _x38, _x39) {
        return _generateGeneralReportByPoliticParty.apply(this, arguments);
      }
      return generateGeneralReportByPoliticParty;
    }()
  }, {
    key: "generateGeneralReportByNeighborhoods",
    value: function () {
      var _generateGeneralReportByNeighborhoods = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              campaignId = req.user.campaignId;
              _context14.next = 4;
              return this.generateGeneralReportNeighborhoodUseCase.execute(campaignId);
            case 4:
              result = _context14.sent;
              res.status(200).json(_response.Response.ok(result));
              _context14.next = 11;
              break;
            case 8:
              _context14.prev = 8;
              _context14.t0 = _context14["catch"](0);
              next(_context14.t0);
            case 11:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[0, 8]]);
      }));
      function generateGeneralReportByNeighborhoods(_x40, _x41, _x42) {
        return _generateGeneralReportByNeighborhoods.apply(this, arguments);
      }
      return generateGeneralReportByNeighborhoods;
    }()
  }, {
    key: "generateGeneralReportByLeaders",
    value: function () {
      var _generateGeneralReportByLeaders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res, next) {
        var campaignId, result;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              campaignId = req.user.campaignId;
              _context15.next = 4;
              return this.generateGeneralReportLeaderUseCase.execute(campaignId);
            case 4:
              result = _context15.sent;
              res.status(200).json(_response.Response.ok(result));
              _context15.next = 11;
              break;
            case 8:
              _context15.prev = 8;
              _context15.t0 = _context15["catch"](0);
              next(_context15.t0);
            case 11:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[0, 8]]);
      }));
      function generateGeneralReportByLeaders(_x43, _x44, _x45) {
        return _generateGeneralReportByLeaders.apply(this, arguments);
      }
      return generateGeneralReportByLeaders;
    }()
  }]);
}();