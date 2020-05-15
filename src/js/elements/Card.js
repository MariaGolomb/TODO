const uuid = require('uuid');

class Card {
  constructor(columnId) {
    this.id = uuid();
    this.content = undefined;
    this.columnId = columnId;
  }

  setContent(data) {
    this.content = data;
  }
}

export default Card;
