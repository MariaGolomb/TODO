import CardDisplay from './display/CardDisplay';
import ColumnDisplay from './display/ColumnDisplay';
import TodoListDisplay from './display/TodoListDisplay';
import TodoList from './elements/TodoList';
import CardList from './elements/CardList';
import deleteItem from './display/deleteItem';
import {
  COLUMN_ID_PREF,
  CARD_ID_PREF,
  ADD_COLUMN_BUTTON_ID,
  ADD_CARD_BUTTON_ID_PREF,
  CARD_BLOCK_ID_PREF,
  COLUMN_TITLE_ID_PREF,
  CARD_CONTENT_ID_PREF,
  DELETE_CARD_BUTTON_ID_PREF,
  DELETE_COLUMN_BUTTON_ID_PREF,
} from '../constants';

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
      const newCard = cardList.addCard(columnId);
      const cardDisplay = new CardDisplay(newCard).drawCard();
      document.getElementById(`${CARD_BLOCK_ID_PREF}${columnId}`).appendChild(cardDisplay);
    }

    if (event.target.id.startsWith(DELETE_COLUMN_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(DELETE_COLUMN_BUTTON_ID_PREF.length);
      todoList.deleteColumn(columnId);
      deleteItem(`${COLUMN_ID_PREF}${columnId}`);
    }

    if (event.target.id.startsWith(DELETE_CARD_BUTTON_ID_PREF)) {
      const cardId = event.target.id.slice(DELETE_CARD_BUTTON_ID_PREF.length);
      cardList.deleteCard(cardId);
      deleteItem(`${CARD_ID_PREF}${cardId}`);
    }
  });

  document.addEventListener('change', event => {
    if (event.target.id.startsWith(COLUMN_TITLE_ID_PREF)) {
      const columnId = event.target.id.slice(COLUMN_TITLE_ID_PREF.length);
      todoList.findColumn(columnId).setTitle(event.target.value);
    }
    if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
      const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
      cardList.findCard(cardId).setContent(event.target.value);
    }
  });
};

export default controlTodoList;
