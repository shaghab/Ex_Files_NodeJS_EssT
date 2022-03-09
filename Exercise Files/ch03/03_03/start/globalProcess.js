console.log(process.pid);
console.log(process.version);
console.log(process.versions.node);

console.log(process.argv);

const grab = (flag) => {
  let index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
};

let greeting = grab("--greeting");
let name = grab("--name");

console.log(`${greeting} ${name}`);
