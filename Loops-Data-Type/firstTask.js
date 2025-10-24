import readlineSync from "readline-sync";

const name = readlineSync.question("What is your name? ");
console.log(`Здрасти, ${name}!`);