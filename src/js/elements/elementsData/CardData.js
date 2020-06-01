const uuid = require('uuid');

class CardData {
  constructor() {
    this.id = undefined;
    this.content = undefined;
    this.columnId = undefined;
  }

  createNewCard(columnId) {
    this.id = uuid();
    this.columnId = columnId;
    return this;
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
}

export default CardData;
