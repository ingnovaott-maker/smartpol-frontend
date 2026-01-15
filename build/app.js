"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _error = require("./interfaces/middlewares/error.js");
var _authRoutes = _interopRequireDefault(require("./interfaces/routes/authRoutes.js"));
var _votePlaceRoutes = _interopRequireDefault(require("./interfaces/routes/votePlaceRoutes.js"));
var _userRoutes = _interopRequireDefault(require("./interfaces/routes/userRoutes.js"));
var _peopleRoutes = _interopRequireDefault(require("./interfaces/routes/peopleRoutes.js"));
var _departamentRoutes = _interopRequireDefault(require("./interfaces/routes/departamentRoutes.js"));
var _municipalityRoutes = _interopRequireDefault(require("./interfaces/routes/municipalityRoutes.js"));
var _candidateRoutes = _interopRequireDefault(require("./interfaces/routes/candidateRoutes.js"));
var _campaignRoutes = _interopRequireDefault(require("./interfaces/routes/campaignRoutes.js"));
var _cors2 = require("./interfaces/middlewares/cors.js");
require("./utils/auth/index.js");
var _process$env$PORT; //routes
//cors options
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])(_cors2.optionsCors));
app.options("*", (0, _cors["default"])(_cors2.optionsCors));
app.disable("x-powered-by");
var PORT = (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 2020;
app.use("/auth", _authRoutes["default"]);
app.use("/users", _userRoutes["default"]);
app.use("/people", _peopleRoutes["default"]);
app.use("/departaments", _departamentRoutes["default"]);
app.use("/municipalities", _municipalityRoutes["default"]);
app.use("/candidates", _candidateRoutes["default"]);
app.use("/vote-places", _votePlaceRoutes["default"]);
app.use("/campaigns", _campaignRoutes["default"]);
app.use(_error.errorHandler);
app.listen(PORT, function () {
  console.log("server listening on port ".concat(PORT));
});