import Card from './Card';
import { URL } from '../../constants';

class CardList {
  constructor() {
    this.id = undefined;
    this.todoListId = undefined;
    this.cards = [];
  }

  createNewList(todoListId) {
    this.todoListId = todoListId;
    return this;
  }

  createListByData(data) {
    this.id = data.id;
    this.todoListId = data.todoListId;
    this.cards = data.cards.map(card => new Card().createCardByData(card));
    return this;
  }

  async addCard(columnId) {
    const newCard = await new Card().createNewCard(this.todoListId, columnId);
    this.cards.push(newCard);
    return newCard;
  }

  async deleteCard(cardId) {
    try {
      const response = await fetch(`${URL}/list/${this.todoListId}/card/${cardId}`, { method: 'DELETE' });
      if (response.ok) {
        this.cards = this.cards.filter(card => card.id !== cardId);
      }
    } catch (error) {
      console.log(error);
    }
  }

  findCard(id) {
    return this.cards.find(card => card.id === id);
  }
}

export default CardList;
