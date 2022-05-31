import Card from "./Card";

export default class Deck {
  constructor() {
    this.cards = [
      this.generateCards('HEART'),
      this.generateCards('SPADE'),
      this.generateCards('DIAMOND'),
      this.generateCards('CLUB'),
    ]
    // Shuffle Logic
    // this.cards = ...
  }

  generateCards(type) {
    const cards = [new Card(type, 'ACE'), new Card(type, 'Jack'), new Card(type, 'Queen'), new Card(type, 'King')]
    for (let i = 2; i <= 10; i++) {
      cards.push(new Card(type, i.toString()))
    }
    return cards
  }
}