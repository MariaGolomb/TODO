const uuid = require('uuid');

class Card {
  constructor(content, columnId) {
    this.id = uuid();
    this.content = content;
    this.columnId = columnId;
  }
}

export default Card;
