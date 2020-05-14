import uuid from 'uuid';
import Card from './Card';

class CardList {
  constructor(todoListId, arrOfCards) {
    this.id = uuid();
    this.todoListId = todoListId;
    this.cards = arrOfCards || [];
  }

  addCard(columnId) {
    const newCard = new Card(columnId);
    this.cards.push(newCard);
    return newCard;
  }

  deleteCard(cardId) {
    this.cards = this.cards.filter(card => card.id !== cardId);
  }
}

export default CardList;
