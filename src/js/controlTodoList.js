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

import TodoList from './elements/TodoList';

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
  const todoList = new TodoList().createTodoList();
  cardAutoResize();
  const listDisplay = todoList.drawTodoList();
  document.body.appendChild(listDisplay);

  document.addEventListener('click', event => {
    console.log(event.target);
  });

  document.addEventListener('click', event => {
    if (event.target.id === ADD_COLUMN_BUTTON_ID) {
      const newColumn = todoList.addColumn();
      const columnDisplay = newColumn.drawColumn();
      document.getElementById(ADD_COLUMN_BUTTON_ID).before(columnDisplay);
    }

    if (event.target.id.startsWith(ADD_CARD_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(ADD_CARD_BUTTON_ID_PREF.length);
      const newCard = todoList.addCard(columnId);
      const cardDisplay = newCard.drawCard();
      cardDisplay.classList.add('card-isEdit');
      cardDisplay.classList.add('card-isActive');

      document.getElementById(`${CARD_BLOCK_ID_PREF}${columnId}`).appendChild(cardDisplay);
    }

    if (event.target.id.startsWith(DELETE_COLUMN_BUTTON_ID_PREF)) {
      const columnId = event.target.id.slice(DELETE_COLUMN_BUTTON_ID_PREF.length);
      todoList.deleteColumn(columnId);
      deleteItem(`${COLUMN_ID_PREF}${columnId}`);
    }

    if (event.target.id.startsWith(DELETE_CARD_BUTTON_ID_PREF)) {
      const cardId = event.target.id.slice(DELETE_CARD_BUTTON_ID_PREF.length);
      todoList.deleteCard(cardId);
      deleteItem(`${CARD_ID_PREF}${cardId}`);
    }

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

    /*
    if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
      const id = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
      console.log('hi!');
      const card = document.getElementById(`${CARD_ID_PREF}${id}`);
      if (card.classList.contains('card-isActive')) {
        card.classList.remove('card-isActive');
        // card.classList.add('card--input-isActive');
        card.readOnly = false;
      } else {
        // card.classList.remove('card--input-isActive');
        card.classList.add('card-isActive');
        card.readOnly = true;
      }
    }
    */
  });

  document.addEventListener('change', event => {
    if (event.target.id.startsWith(COLUMN_TITLE_ID_PREF)) {
      const columnId = event.target.id.slice(COLUMN_TITLE_ID_PREF.length);
      todoList.setColumnTitle(columnId, event.target.value);
    }
    if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
      const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
      todoList.setCardContent(cardId, event.target.value);
    }
  });
};

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
