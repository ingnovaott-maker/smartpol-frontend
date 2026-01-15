"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsCors = void 0;
var ACCEPTED_ORIGINS = ["https://smartpol.netlify.app", "http://127.0.0.1:5173", "http://localhost:5173", "http://127.0.0.1:5500", "https://master--smartpol.netlify.app"];
var optionsCors = exports.optionsCors = {
  origin: function origin(_origin, callback) {
    if (ACCEPTED_ORIGINS.includes(_origin) || !_origin) {
      callback(null, {
        origin: true
      });
    } else {
      callback(new Error("Origen no permitido"), {
        origin: false
      });
    }
  },
  methods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
  //allowedHeaders: ['Content-Type'],
  // preflightContinue: true,
  credentials: true
  // maxAge: 3600
  //optionsSuccessStatus: 204
};

//necesito un endoso de seguro de un creditoS
//pedir al banco bajar la tasa de interes o hacemos compra de cartera