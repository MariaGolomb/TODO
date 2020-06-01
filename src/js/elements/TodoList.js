import TodoListData from './elementsData/TodoListData';
import Button from './Button';
import { ADD_COLUMN_BUTTON_LABEL, ADD_COLUMN_BUTTON_ID } from '../../constants';

class TodoList extends TodoListData {
  drawTodoList() {
    const fragment = document.createDocumentFragment();

    // if (todoList) {

    this.columns.forEach(column => {
      const columnDisplay = column.drawColumn(this.cardList); // drawColumn(column, cardList);
      fragment.appendChild(columnDisplay);
    });

    // }

    const addColumnButton = new Button(ADD_COLUMN_BUTTON_ID, ADD_COLUMN_BUTTON_LABEL).createButton();
    addColumnButton.classList.add('add_column_button');
    fragment.appendChild(addColumnButton);
    return fragment;
  }
}

export default TodoList;
