import TodoList from './TodoList';

class DataTodoList extends TodoList {
  constructor(data) {
    super();
    this.id = data.id;
    this.columns = data.columns;
  }
}

export default DataTodoList;
