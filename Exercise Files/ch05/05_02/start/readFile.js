const fs = require("fs");

fs.readFile("./assets/alex.jpg", (err, img) => {
  console.log("file content read");
  console.log(img);
});
