const uuid = require('uuid');

class ColumnData {
  constructor() {
    this.id = undefined;
    this.title = undefined;
  }

  createNewColumn() {
    this.id = uuid();
    this.title = 'New column';
    return this;
  }

  createColumnByData(data) {
    this.id = data.id;
    this.title = data.title;
    return this;
  }

  setTitle(data) {
    this.title = data;
    return this;
  }
}

export default ColumnData;
