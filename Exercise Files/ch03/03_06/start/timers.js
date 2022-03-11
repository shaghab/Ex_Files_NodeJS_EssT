const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timeFinished = () => console.log("Done");

setTimeout(timeFinished, waitTime);
