const uuid = require('uuid');

class Column {
  constructor(title = 'New column') {
    this.id = uuid();
    this.title = title;
  }

  setTitle(data) {
    this.title = data;
  }
}

export default Column;
