"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _votePlaceController = require("../controllers/votePlaceController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var votePlaceController = new _votePlaceController.VotePlaceController();
router.get("/", _passport["default"].authenticate("jwt", {
  session: false
}), function (req, res) {
  return votePlaceController.getAll(req, res);
});
var _default = exports["default"] = router;