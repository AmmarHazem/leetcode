const fs = require("fs");

const searchCSV = async ({ filePath, columnIndex, searchKey }) => {
  console.log("searchCSV", filePath, columnIndex, searchKey);
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    // console.log("data", data);
  } catch (e) {
    console.log(`could not read file ${filePath}`);
    console.log(e);
  }
};

const argv = process.argv;

if (argv.length !== 5) {
  console.log(
    "Usage:\nnode searchCSV.js [path/to/file.csv] [column index] [search key]"
  );
} else {
  searchCSV({ filePath: argv[2], columnIndex: argv[3], searchKey: argv[4] });
}
