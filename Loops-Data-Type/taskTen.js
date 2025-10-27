function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let suit = ["♠️ Spades", "♥️ Hearts","♦️ Diamonds","♣️ Clubs","♣️ Clubs"];

let randomSuit = suit[getRandomInt(suit.length)];

console.log(randomSuit);
