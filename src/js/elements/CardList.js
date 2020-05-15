import uuid from 'uuid';
import Card from './Card';

class CardList {
  constructor(todoListId) {
    this.id = uuid();
    this.todoListId = todoListId;
    this.cards = [];
  }

  addCard(columnId) {
    const newCard = new Card(columnId);
    this.cards.push(newCard);
    return newCard;
  }

  deleteCard(cardId) {
    this.cards = this.cards.filter(card => card.id !== cardId);
  }

  findCard(id) {
    return this.cards.find(card => card.id === id);
  }
}

export default CardList;
