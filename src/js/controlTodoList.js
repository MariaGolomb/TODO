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
  EDIT_CARD_BUTTON_ID_PREF,
} from '../constants';

import { setTodoListLS, setCardsLS, createTodoList, createCardList } from './controlHelpers';

const cardAutoResize = () => {
  const hiddenDiv = document.createElement('div');
  hiddenDiv.classList.add('card--input-div');
  document.body.appendChild(hiddenDiv);

  document.addEventListener('keyup', event => {
    if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
      const currentTextarea = event.target;
      const content = currentTextarea.value;
      hiddenDiv.innerText = content;
      const newHeight = hiddenDiv.offsetHeight;
      if (currentTextarea.offsetHeight !== newHeight) {
        currentTextarea.style.height = `${hiddenDiv.offsetHeight}px`;
      }
    }
  });
};

const controlTodoList = () => {
  const todoList = createTodoList();
  const cardList = createCardList(todoList.id);
  cardAutoResize();

  const listDisplay = drawTodoList(todoList, cardList);
  document.body.appendChild(listDisplay);

  document.addEventListener('click', event => {
    if (event.target.id === ADD_COLUMN_BUTTON_ID) {
      const newColumn = todoList.addColumn();
      setTodoListLS(todoList);
      const columnDisplay = drawColumn(newColumn);
      //   document.body.appendChild(columnDisplay);
      document.getElementById(ADD_COLUMN_BUTTON_ID).before(columnDisplay);
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

document.addEventListener('click', event => {
  if (event.target.id.startsWith(EDIT_CARD_BUTTON_ID_PREF)) {
    const id = event.target.id.slice(EDIT_CARD_BUTTON_ID_PREF.length);
    const cardId = `${CARD_ID_PREF}${id}`;
    const textareaId = `${CARD_CONTENT_ID_PREF}${id}`;
    const card = document.getElementById(cardId);
    const textarea = document.getElementById(textareaId);

    if (card.classList.contains('card-isEdit')) {
      card.classList.remove('card-isEdit');
      textarea.readOnly = true;
    } else {
      card.classList.add('card-isEdit');
      textarea.readOnly = false;
    }
  }
});

/*
textarea.addEventListener('focus', () => {
  card.classList.add('card-isActive');

});

card.addEventListener('mouseleave', () => {
  card.classList.remove('card-isActive');

  textarea.readOnly = true;
});
*/
/*
document.addEventListener('focus', event => {
  console.log('1');
  if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
    console.log('2');
    const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
    document.getElementById(`${CARD_ID_PREF}${cardId}`).classList.add('card-isActive');
  }
});

document.addEventListener('mouseleave', event => {
  console.log('mouseleave_d');
  console.log(`mouseleave_d:${event.target.id}`);
  
  if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
    const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
    document.getElementById(`${CARD_ID_PREF}${cardId}`).classList.remove('card-isActive');
  }
  
});
*/
/*
card.addEventListener('mouseleave', () => {
  deleteButton.classList.add('hideItem');
  editButton.classList.add('hideItem');
  textarea.readOnly = true;
});

editButton.addEventListener('click', () => {
  if (textarea.classList.contains('card--input-isNotActive')) {
    textarea.classList.remove('card--input-isNotActive');
    textarea.classList.add('card--input-isActive');
    textarea.readOnly = false;
  } else {
    textarea.classList.remove('card--input-isActive');
    textarea.classList.add('card--input-isNotActive');
    textarea.readOnly = true;
  }
});
*/
export default controlTodoList;
