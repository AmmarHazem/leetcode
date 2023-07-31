const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

async function readExcelToFile() {
  const rows = await readXlsxFile("./lab-tests.xlsx", { sheet: 1 });
  const jsonData = rows.slice(4).map((row) => {
    return {
      "Test Name": row[1],
      "Partner Price Cost Price": row[2],
    };
  });
  fs.writeFile("./lab-tests.json", JSON.stringify(jsonData), "utf-8", (e) => {
    if (e) {
      return console.log("--- write json error");
    }
    console.log("--- write success");
  });
}

readExcelToFile();
