const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

async function readExcelToFile() {
  const rows = await readXlsxFile("./tests.xlsx", { sheet: 1 });
  const jsonData = rows.map((row) => {
    return {
      "Test Name": row[1],
      "Partner Price Cost Price": row[2],
      "TAT Hours": row[3],
      FASTING: row[4],
    };
  });
  fs.writeFile("./tests.json", JSON.stringify(jsonData), "utf-8", (e) => {
    if (e) {
      return console.log("--- write json error");
    }
    console.log("--- write success");
  });
}

readExcelToFile();
