const excelJS = require("exceljs");
const fs = require("fs");

async function convertJsonToExcel() {
  const jsonData = JSON.parse(fs.readFileSync("./dardoc-nurses-total-hours.json", "utf-8"));
  const workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet("DarDoc Nurses");
  worksheet.columns = [
    { header: "Name", key: "name", width: 10 },
    { header: "Total Hours In July", key: "totalHours", width: 10 },
    { header: "Uncounted Hours", key: "uncountedHours", width: 10 },
    { header: "Phone Number", key: "phoneNumber", width: 10 },
    { header: "Years Of Experience", key: "yearsOfExperience", width: 10 },
    { header: "Email", key: "email", width: 10 },
  ];
  jsonData.forEach((obj) => {
    worksheet.addRow(obj);
  });
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });
  await workbook.xlsx.writeFile(`./dardoc-nurses-total-hours.xlsx`);
  console.log("DONE");
}

convertJsonToExcel();
