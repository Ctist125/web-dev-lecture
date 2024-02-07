const fs = require("fs");
const path = require("path");

function getFileData(fileName) {
  const filePath = path.join(__dirname, "..", "data", fileName);

  const fileData = fs.readFileSync(filePath);
  const storedReviews = JSON.parse(fileData);

  return storedReviews;
}

module.exports = { getFileData: getFileData };
