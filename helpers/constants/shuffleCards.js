export function shuffleCards() {
  const suits = ["S", "H", "C", "D"];
  const values = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardDeck = [];
  let card = [];

  for (let x = 0; x < suits.length; x++) {
    for (let y = 0; y < values.length; y++) {
      card = { suit: suits[x], val: values[y] };
      cardDeck.push(card);
    }
  };
  console.log('shuffling deck');
  let counter = cardDeck.length;
  let t;
  let i;

  while (counter) {
    i = Math.floor(Math.random() * counter--);
    t = cardDeck[counter];
    cardDeck[counter] = cardDeck[i];
    cardDeck[i] = t;
  }
  console.log(cardDeck)
  return cardDeck;
}
