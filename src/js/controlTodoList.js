import drawCard from './display/drawCard';
import drawColumn from './display/drawColumn';
import drawTodoList from './display/drawTodoList';
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

import { setTodoListLS, setCardsLS, createTodoList, createCardList } from './controlHelpers';

const controlTodoList = () => {
  const todoList = createTodoList();
  const cardList = createCardList(todoList.id);

  console.log(todoList);
  console.log(cardList);

  const listDisplay = drawTodoList(todoList, cardList);
  document.body.appendChild(listDisplay);

  document.addEventListener('click', event => {
    if (event.target.id === ADD_COLUMN_BUTTON_ID) {
      const newColumn = todoList.addColumn();
      setTodoListLS(todoList);
      const columnDisplay = drawColumn(newColumn);
      document.body.appendChild(columnDisplay);
    }

    if (event.target.id.startsWith(ADD_CARD_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(ADD_CARD_BUTTON_ID_PREF.length);
      const newCard = cardList.addCard(columnId);
      setCardsLS(cardList);
      const cardDisplay = drawCard(newCard);
      document.getElementById(`${CARD_BLOCK_ID_PREF}${columnId}`).appendChild(cardDisplay);
    }

    if (event.target.id.startsWith(DELETE_COLUMN_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(DELETE_COLUMN_BUTTON_ID_PREF.length);
      todoList.deleteColumn(columnId);
      setTodoListLS(todoList);
      deleteItem(`${COLUMN_ID_PREF}${columnId}`);
    }

    if (event.target.id.startsWith(DELETE_CARD_BUTTON_ID_PREF)) {
      const cardId = event.target.id.slice(DELETE_CARD_BUTTON_ID_PREF.length);
      cardList.deleteCard(cardId);
      setCardsLS(cardList);
      deleteItem(`${CARD_ID_PREF}${cardId}`);
    }
  });

  document.addEventListener('change', event => {
    if (event.target.id.startsWith(COLUMN_TITLE_ID_PREF)) {
      const columnId = event.target.id.slice(COLUMN_TITLE_ID_PREF.length);
      todoList.findColumn(columnId).setTitle(event.target.value);
      setTodoListLS(todoList);
    }
    if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
      const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
      cardList.findCard(cardId).setContent(event.target.value);
      setCardsLS(cardList);
    }
  });
};

export default controlTodoList;
