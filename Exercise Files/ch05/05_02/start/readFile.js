const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md", "utf-8");

console.log(text);
