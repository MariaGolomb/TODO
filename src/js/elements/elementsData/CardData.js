import { URL } from '../../../constants';
import { formatCardList } from '../../helpers/formatResponseData';

class CardData {
  constructor() {
    this.id = undefined;
    this.content = undefined;
    this.columnId = undefined;
  }

  async createNewCard(listId, columnId) {
    try {
      const body = { columnId, content: this.content };
      const toSend = JSON.stringify(body);
      const response = await fetch(`${URL}/list/${listId}/card`, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: toSend,
      });
      if (response.ok) {
        let data = await response.json();
        data = formatCardList(data);
        const column = data.cards[data.cards.length - 1];
        this.id = column.id;
        this.columnId = column.columnId;

        return this;
      }
    } catch (error) {
      console.log(error);
    }
  }

  createCardByData(data) {
    this.id = data.id;
    this.content = data.content;
    this.columnId = data.columnId;
    return this;
  }

  setContent(data) {
    this.content = data;
  }

  async updateCardBD(todoListId) {
    try {
      const { id: _id, content, columnId } = this;

      const toSend = JSON.stringify({ _id, content, columnId });
      const response = await fetch(`${URL}/list/${todoListId}/card`, {
        method: 'PUT',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: toSend,
      });
      if (response.ok) {
        // const data = await response.json();
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default CardData;
