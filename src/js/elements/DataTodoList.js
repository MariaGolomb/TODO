import TodoList from './TodoList';
import DataColumn from './DataColumn';

class DataTodoList extends TodoList {
  constructor(data) {
    super();
    this.id = data.id;
    this.columns = data.columns.map(column => new DataColumn(column));
  }
}

export default DataTodoList;
