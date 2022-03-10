//process.stdout.write("Hello ");
//process.stdout.write("World \n\n\n");

const questions = [
  "What is your name",
  "what you rather be doing",
  "whats your fav programming language",
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();
