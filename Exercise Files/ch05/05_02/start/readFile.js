const fs = require("fs");

fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
  console.log("file content read");
  console.log(text);
});
