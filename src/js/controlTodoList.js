import CardDisplay from './display/CardDisplay';
import ColumnDisplay from './display/ColumnDisplay';
import TodoListDisplay from './display/TodoListDisplay';
import TodoList from './elements/TodoList';
import CardList from './elements/CardList';
import { ADD_COLUMN_BUTTON_ID, ADD_CARD_BUTTON_ID_PREF, CARD_BLOCK_ID_PREF } from '../constants';

const controlTodoList = () => {
  const todoList = new TodoList();
  const cardList = new CardList(todoList.id);
  new TodoListDisplay(todoList).createButton();

  document.addEventListener('click', event => {
    if (event.target.id === ADD_COLUMN_BUTTON_ID) {
      const newColumn = todoList.addColumn();
      const column = new ColumnDisplay(newColumn).drawColumn();
      document.body.appendChild(column);
    }

    if (event.target.id.startsWith(ADD_CARD_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(ADD_CARD_BUTTON_ID_PREF.length);
      console.log(columnId);
      const newCard = cardList.addColumn(columnId);

      console.log(newCard);
      const cardDisplay = new CardDisplay(newCard).drawCard();
      document.getElementById(`${CARD_BLOCK_ID_PREF}${columnId}`).appendChild(cardDisplay);
    }
  });
};

export default controlTodoList;
