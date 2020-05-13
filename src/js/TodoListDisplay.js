import Button from './Button';
import { ADD_COLUMN_BUTTON_LABEL, ADD_COLUMN_BUTTON_ID } from '../constants';

class TodoListDisplay {
  constructor(todoList) {
    this.todoList = todoList;
  }

  createButton() {
    this.addColumnButton = new Button(ADD_COLUMN_BUTTON_ID, ADD_COLUMN_BUTTON_LABEL).createButton();
    document.body.appendChild(this.addColumnButton);
  }
}

export default TodoListDisplay;
