import Column from './Column';

const uuid = require('uuid');

class TodoList {
  constructor() {
    this.id = uuid();
    this.columns = [];
  }

  addColumn() {
    const column = new Column();
    this.columns.push(column);
    return column;
  }

  findColumn(id) {
    return this.columns.find(column => column.id === id);
  }

  deleteColumn(id) {
    this.columns = this.columns.filter(column => column.id !== id);
  }
}

export default TodoList;
