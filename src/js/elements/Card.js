const uuid = require('uuid');

class Card {
  constructor(columnId, content) {
    this.id = uuid();
    this.content = content;
    this.columnId = columnId;
  }
}

export default Card;
