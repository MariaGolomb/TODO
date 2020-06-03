import Column from '../Column';
import CardList from '../CardList';
import { getTodoListLS, getCardListLS, setTodoListLS, setCardsLS } from '../../controlHelpers';

const uuid = require('uuid');

class TodoListData {
  constructor() {
    this.id = undefined;
    this.columns = [];
    this.cardList = undefined;
    this.userId = undefined;
  }

  createTodoList() {
    const todoListData = getTodoListLS();
    const cardListData = getCardListLS();
    if (todoListData) {
      return this.createListByData(todoListData, cardListData);
    }
    return this.createNewList();
  }

  createNewList() {
    this.id = uuid();
    this.cardList = new CardList().createNewList(this.id);
    setTodoListLS(this);
    setCardsLS(this.cardList);
    return this;
  }

  createListByData(todoListData, cardListData) {
    this.id = todoListData.id;
    this.columns = todoListData.columns.map(column => new Column().createColumnByData(column));
    this.cardList = new CardList().createListByData(cardListData);
    return this;
  }

  addColumn() {
    const column = new Column().createNewColumn();
    this.columns.push(column);
    setTodoListLS(this);
    return column;
  }

  findColumn(id) {
    return this.columns.find(column => column.id === id);
  }

  deleteColumn(id) {
    this.columns = this.columns.filter(column => column.id !== id);
    this.cardList.cards = this.cardList.cards.filter(card => card.columnId !== id);
    setTodoListLS({ id: this.id, columns: this.columns });
    setCardsLS(this.cardList);
  }

  addCard(columnId) {
    const newCard = this.cardList.addCard(columnId);
    setTodoListLS({ id: this.id, columns: this.columns });
    setCardsLS(this.cardList);
    return newCard;
  }

  deleteCard(cardId) {
    this.cardList.deleteCard(cardId);
    setCardsLS(this.cardList);
  }

  setCardContent(cardId, content) {
    this.cardList.findCard(cardId).setContent(content);
    setCardsLS(this.cardList);
  }

  setColumnTitle(columnId, content) {
    this.findColumn(columnId).setTitle(content);
    setTodoListLS({ id: this.id, columns: this.columns });
  }
}

export default TodoListData;
