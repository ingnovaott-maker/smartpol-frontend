"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateFormat = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DateFormat = exports.DateFormat = /*#__PURE__*/function () {
  function DateFormat() {
    _classCallCheck(this, DateFormat);
  }
  return _createClass(DateFormat, null, [{
    key: "yyyyMMDD",
    value: function yyyyMMDD(date) {
      if (!date) return null;
      var dateObj = new Date(date);
      var day = String(dateObj.getDate()).padStart(2, "0");
      var month = String(dateObj.getMonth() + 1).padStart(2, "0");
      var year = dateObj.getFullYear();
      return "".concat(year, "-").concat(month, "-").concat(day);
    }
  }, {
    key: "yyyyMMDDHHMMSS",
    value: function yyyyMMDDHHMMSS(date) {
      if (!date) return null;
      var dateObj = new Date(date);
      var day = String(dateObj.getDate()).padStart(2, "0");
      var month = String(dateObj.getMonth() + 1).padStart(2, "0");
      var year = dateObj.getFullYear();
      var hour = String(dateObj.getHours()).padStart(2, '0');
      var minutes = String(dateObj.getMinutes()).padStart(2, '0');
      var seconds = String(dateObj.getSeconds()).padStart(2, '0');
      return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minutes, ":").concat(seconds);
    }
  }, {
    key: "isToday",
    value: function isToday(date) {
      if (!date) return null;
      var dateInput = new Date(date);
      var currentDate = new Date();
      return dateInput.getFullYear() === currentDate.getFullYear() && dateInput.getMonth() === currentDate.getMonth() && dateInput.getDate() === currentDate.getDate();
    }
  }]);
}();