import ExcelJS from "exceljs";

const exportToExcel = (data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Personas");

  // Agrega encabezados de columna
  const headers = Object.keys(data[0]);
  worksheet.addRow(headers);

  // Agrega los datos
  data.forEach((row) => {
    const rowData = headers.map((header) => row[header]);
    worksheet.addRow(rowData);
  });

  // Crea un buffer para el archivo Excel
  return workbook.xlsx.writeBuffer();
};

export { exportToExcel };
