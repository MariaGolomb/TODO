import Button from './Button';
import ColumnDisplay from './ColumnDisplay';

class TodoListDisplay {
  constructor(todoList) {
    this.todoList = todoList;
  }

  createButton() {
    this.addColumnButton = new Button(
      'Add new column',
      // this.drawColumn,
      // this.todoList.addColumn.bind(this.todoList),
      () => {
        const newColumn = this.todoList.addColumn();
        this.drawColumn(newColumn);
      },
    ).createButton();
    document.body.appendChild(this.addColumnButton);
  }

  drawColumns() {}

  drawColumn(columnData) {
    const column = new ColumnDisplay(columnData).drawColumn();
    document.body.appendChild(column);
  }
}

export default TodoListDisplay;
