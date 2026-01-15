import { ValidationError } from "sequelize";
import { Response } from "./response.js";
import { CustomException } from "../../exceptions/customException.js";

export function errorHandler(err, req, res, next) {
  let errorStatusCode = null;
  let errorName = null;
  let errorMessage = null;

  if (err.isBoom) {
    
    const { output } = err;
    errorStatusCode = output.statusCode;
    errorName = output.payload.error;
    errorMessage = output.payload.message;
  } else if (err instanceof ValidationError) {
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
  const exception = new CustomException(
    errorMessage,
    errorName,
    errorStatusCode
  );

  res
    .status(exception.statusCode)
    .json(
      Response.error(exception.statusCode, exception.message, exception.name)
    );

  next(err);
}
