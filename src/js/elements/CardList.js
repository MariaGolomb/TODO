import uuid from 'uuid';
import Card from './Card';

class CardList {
  constructor() {
    this.id = undefined;
    this.todoListId = undefined;
    this.cards = [];
  }

  createNewList(todoListId) {
    this.id = uuid();
    this.todoListId = todoListId;
    return this;
  }

  createListByData(data) {
    this.id = data.id;
    this.todoListId = data.todoListId;
    this.cards = data.cards.map(card => new Card().createCardByData(card));
    return this;
  }

  addCard(columnId) {
    const newCard = new Card().createNewCard(columnId);
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
