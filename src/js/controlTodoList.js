import Card from './Card';
import CardDisplay from './CardDisplay';
import ColumnDisplay from './ColumnDisplay';
import TodoListDisplay from './TodoListDisplay';
import TodoList from './TodoList';
import { ADD_COLUMN_BUTTON_ID, ADD_CARD_BUTTON_ID_PREF } from '../constants';

const controlTodoList = () => {
  const todoList = new TodoList();
  new TodoListDisplay(todoList).createButton();

  document.addEventListener('click', event => {
    if (event.target.id === ADD_COLUMN_BUTTON_ID) {
      const newColumn = todoList.addColumn();
      const column = new ColumnDisplay(newColumn).drawColumn();
      document.body.appendChild(column);
    }

    if (event.target.id.startsWith(ADD_CARD_BUTTON_ID_PREF)) {
      const newCard = new Card(event.target.id.slice(2));
      console.log(newCard);
      const cardDisplay = new CardDisplay(newCard).drawCard();
      document.body.appendChild(cardDisplay);
    }
  });
};

export default controlTodoList;
