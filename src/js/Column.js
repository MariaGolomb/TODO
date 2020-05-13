const uuid = require('uuid');

class Column {
  constructor(title = 'New column') {
    this.id = uuid();
    this.title = title;
  }
}

export default Column;
