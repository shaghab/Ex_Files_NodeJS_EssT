const fs = require("fs");

const md = `
# this is a new file

We can write test to ta file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }

  console.log("file saved");
});
