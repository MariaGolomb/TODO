import Column from './Column';

const uuid = require('uuid');

class TodoList {
  constructor(arrOfColumns) {
    this.id = uuid();
    this.columns = arrOfColumns || [];
  }

  addColumn() {
    const column = new Column();
    this.columns.push(column);

    console.log(this.columns);

    return column;
  }

  deleteColumn(id) {
    this.columns = this.columns.filter(column => column.id !== id);
  }
}

export default TodoList;
