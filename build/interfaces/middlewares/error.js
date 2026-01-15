"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = errorHandler;
var _sequelize = require("sequelize");
var _response = require("./response.js");
var _customException = require("../../exceptions/customException.js");
function errorHandler(err, req, res, next) {
  var errorStatusCode = null;
  var errorName = null;
  var errorMessage = null;
  if (err.isBoom) {
    var output = err.output;
    errorStatusCode = output.statusCode;
    errorName = output.payload.error;
    errorMessage = output.payload.message;
  } else if (err instanceof _sequelize.ValidationError) {
    errorStatusCode = 409;
    errorName = err.name;
    errorMessage = err.errors;
  } else if (err.isJoi) {
    errorStatusCode = 400;
    errorName = err.name;
    errorMessage = err.message;
  } else {
    errorStatusCode = err.status;
    errorName = err.name;
    errorMessage = err.message;
  }
  var exception = new _customException.CustomException(errorMessage, errorName, errorStatusCode);
  res.status(exception.statusCode).json(_response.Response.error(exception.statusCode, exception.message, exception.name));
  next(err);
}