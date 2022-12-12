const fs = require("fs-extra");
const path = require("path");

const copyFiles = () => {
  const staticFile = path.resolve("./static");
  const binFile = path.resolve("./bin")
  fs.copySync(staticFile, binFile);
}

copyFiles();