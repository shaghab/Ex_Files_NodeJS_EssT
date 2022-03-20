const cp = require("child_process");

cp.exec("dir", (err, data, stderr) => {
  if (err) {
    //console.log(stderr);
    throw err;
  }
  console.log(data);
});
