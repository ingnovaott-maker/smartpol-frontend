"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportToExcel = void 0;
var _exceljs = _interopRequireDefault(require("exceljs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var exportToExcel = exports.exportToExcel = function exportToExcel(data) {
  var workbook = new _exceljs["default"].Workbook();
  var worksheet = workbook.addWorksheet("Personas");

  // Agrega encabezados de columna
  var headers = Object.keys(data[0]);
  worksheet.addRow(headers);

  // Agrega los datos
  data.forEach(function (row) {
    var rowData = headers.map(function (header) {
      return row[header];
    });
    worksheet.addRow(rowData);
  });

  // Crea un buffer para el archivo Excel
  return workbook.xlsx.writeBuffer();
};