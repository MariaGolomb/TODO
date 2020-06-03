import TodoListData from './elementsData/TodoListData';
import Button from './Button';
import deleteItem from '../display/deleteItem';
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
  ADD_COLUMN_BUTTON_LABEL,
} from '../../constants';

class TodoList extends TodoListData {
  drawTodoList() {
    const hiddenDiv = document.createElement('div');
    hiddenDiv.classList.add('card--input-div');
    document.body.appendChild(hiddenDiv);

    const fragment = document.createDocumentFragment();
    this.columns.forEach(column => {
      const columnDisplay = column.drawColumn(this.cardList);
      fragment.appendChild(columnDisplay);
    });

    const addColumnButton = new Button(ADD_COLUMN_BUTTON_ID, ADD_COLUMN_BUTTON_LABEL).createButton();
    addColumnButton.classList.add('add_column_button');
    fragment.appendChild(addColumnButton);
    this.addEventListeners();
    return fragment;
  }

  addEventListeners() {
    document.addEventListener('click', event => {
      if (event.target.id === ADD_COLUMN_BUTTON_ID) {
        const newColumn = this.addColumn();
        const columnDisplay = newColumn.drawColumn();
        document.getElementById(ADD_COLUMN_BUTTON_ID).before(columnDisplay);
      }

      if (event.target.id.startsWith(ADD_CARD_BUTTON_ID_PREF)) {
        const columnId = event.target.id.slice(ADD_CARD_BUTTON_ID_PREF.length);
        const newCard = this.addCard(columnId);
        const cardDisplay = newCard.drawCard();
        document.getElementById(`${CARD_BLOCK_ID_PREF}${columnId}`).appendChild(cardDisplay);
      }

      if (event.target.id.startsWith(DELETE_COLUMN_BUTTON_ID_PREF)) {
        const columnId = event.target.id.slice(DELETE_COLUMN_BUTTON_ID_PREF.length);
        this.deleteColumn(columnId);
        deleteItem(`${COLUMN_ID_PREF}${columnId}`);
      }

      if (
        event.target.id.startsWith(DELETE_CARD_BUTTON_ID_PREF) ||
        event.target.parentElement.id.startsWith(DELETE_CARD_BUTTON_ID_PREF)
      ) {
        const fullId = event.target.id || event.target.parentElement.id;
        const cardId = fullId.slice(DELETE_CARD_BUTTON_ID_PREF.length);
        this.deleteCard(cardId);
        deleteItem(`${CARD_ID_PREF}${cardId}`);
      }

      if (
        event.target.id.startsWith(EDIT_CARD_BUTTON_ID_PREF) ||
        event.target.parentElement.id.startsWith(EDIT_CARD_BUTTON_ID_PREF)
      ) {
        const fullId = event.target.id || event.target.parentElement.id;
        const id = fullId.slice(EDIT_CARD_BUTTON_ID_PREF.length);
        const cardId = `${CARD_ID_PREF}${id}`;
        const textareaId = `${CARD_CONTENT_ID_PREF}${id}`;

        const card = document.querySelector(`div #${cardId}`);
        const textarea = document.getElementById(textareaId);

        if (card.classList.contains('card-isEdit')) {
          card.classList.remove('card-isEdit');
          card.classList.add('card-isMove');
          textarea.readOnly = true;
        } else {
          card.classList.remove('card-isMove');
          card.classList.add('card-isEdit');
          textarea.readOnly = false;
        }
      }

      if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
        const card = event.target.parentElement;
        if (!card.classList.contains('card-isActive')) {
          card.classList.add('card-isActive');
        }
      }
    });

    document.addEventListener('keyup', event => {
      if (event.target.id.startsWith(COLUMN_TITLE_ID_PREF)) {
        const columnId = event.target.id.slice(COLUMN_TITLE_ID_PREF.length);
        this.setColumnTitle(columnId, event.target.value);
      }
      if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
        const cardId = event.target.id.slice(CARD_CONTENT_ID_PREF.length);
        this.setCardContent(cardId, event.target.value);
      }
      if (event.target.id.startsWith(CARD_CONTENT_ID_PREF)) {
        const hiddenDiv = document.querySelector('div.card--input-div');
        const currentTextarea = event.target;
        const content = currentTextarea.value;
        hiddenDiv.innerText = content;
        const newHeight = hiddenDiv.offsetHeight;
        if (currentTextarea.offsetHeight !== newHeight) {
          currentTextarea.style.height = `${hiddenDiv.offsetHeight}px`;
        }
      }
    });
  }
}

export default TodoList;
