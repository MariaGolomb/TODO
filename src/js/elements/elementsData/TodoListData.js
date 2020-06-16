import Column from '../Column';
import CardList from '../CardList';
import { formatData } from '../../helpers/formatResponseData';
import { URL, TODO__LIST_ID_LOCAL_STORAGE } from '../../../constants';

class TodoListData {
  constructor() {
    this.id = undefined;
    this.columns = [];
    this.cardList = undefined;
    this.userId = undefined;
  }

  async createTodoList() {
    const id = localStorage.getItem(TODO__LIST_ID_LOCAL_STORAGE);

    if (id) {
      try {
        const response = await fetch(`${URL}/list/${id}`);
        if (response.ok) {
          const responseData = await response.json();
          const data = formatData(responseData);
          const { todoList } = data;
          const { cardList } = data;
          return this.createListByData(todoList, cardList);
        }
      } catch (error) {
        console.log(error);
        return this.createNewList();
      }
    }
    return this.createNewList();
  }

  async createNewList() {
    try {
      const response = await fetch(`${URL}/list`, { method: 'POST' });
      if (response.ok) {
        const updatedData = await response.json();
        const data = formatData(updatedData);
        const { todoList } = data;
        const { cardList } = data;
        this.createListByData(todoList, cardList);
        localStorage.setItem(TODO__LIST_ID_LOCAL_STORAGE, this.id);
        return this;
      }
      return false;
    } catch (error) {
      //
    }
    return this;
  }

  createListByData(todoListData, cardListData) {
    this.id = todoListData.id;
    this.columns = todoListData.columns.map(column => new Column().createColumnByData(column));
    this.cardList = new CardList().createListByData(cardListData);
    return this;
  }

  async addColumn() {
    const column = await new Column().createNewColumn(this);
    this.columns.push(column);
    return column;
  }

  findColumn(id) {
    return this.columns.find(column => column.id === id);
  }

  async deleteColumn(id) {
    try {
      const response = await fetch(`${URL}/list/${this.id}/column/${id}`, { method: 'DELETE' });
      if (response.ok) {
        this.columns = this.columns.filter(column => column.id !== id);
        this.cardList.cards = this.cardList.cards.filter(card => card.columnId !== id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addCard(columnId) {
    const newCard = await this.cardList.addCard(columnId);
    return newCard;
  }

  deleteCard(cardId) {
    this.cardList.deleteCard(cardId);
  }

  setCardContent(cardId, content) {
    this.cardList.findCard(cardId).setContent(content);
  }

  setColumnTitle(columnId, content) {
    this.findColumn(columnId).setTitle(content);
  }

  async setCardContentBD(cardId) {
    await this.cardList.findCard(cardId).updateCardBD(this.id);
  }

  async setColumnTitleDB(columnId) {
    await this.findColumn(columnId).setTitleDB(this.id);
  }
}

export default TodoListData;
