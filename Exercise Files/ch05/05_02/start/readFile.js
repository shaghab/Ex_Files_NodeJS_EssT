const fs = require("fs");

fs.readFile("./assets/alex.jpeg", (err, img) => {
  if (err) {
    console.log(`An error has occured: ${err.message}`);
    process.exit();
  }
  console.log("file content read");
  console.log(img);
});
