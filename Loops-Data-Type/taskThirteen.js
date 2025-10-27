function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cards = ["2♣️","2♦️","2♥️","2♠️",
              "3♣️","3♦️","3♥️","3♠️",
                "4♣️","4♦️","4♥️","4♠️",
                  "5♣️","5♦️","5♥️","5♠️",
                    "6♣️","6♦️","6♥️","6♠️",
                      "7♣️","7♦️","7♥️","7♠️",
                        "8♣️","8♦️","8♥️","8♠️",
                          "9♣️","9♦️","9♥️","9♠️",
                            "10♣️","10♦️","10♥️","10♠️",
                              "J♣️","J♦️","J♥️","J♠️",
                                "Q♣️","Q♦️","Q♥️","Q♠️",
                                  "K♣️","K♦️","K♥️","K♠️",
                                    "A♣️","A♦️","A♥️","A♠️"];

let number = getRandom(0, 51);
console.log(number);
for (let i = 0; i < cards.length;i++ ){
  if (number === i){
    console.log(cards[i]);
  }

  
}