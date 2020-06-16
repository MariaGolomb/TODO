import {
  CARD_CONTENT_ID_PREF,
  CARD_ID_PREF,
  DELETE_CARD_BUTTON_ID_PREF,
  EDIT_CARD_BUTTON_ID_PREF,
} from '../../constants';
import CardData from './elementsData/CardData';
import { dragAndDropCard } from './dragAndDrop';

class Card extends CardData {
  drawCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('card-isMove');
    card.id = `${CARD_ID_PREF}${this.id}`;
    card.draggable = true;

    const deleteButton = document.createElement('button');
    const deleteButtonInner = document.createElement('i');
    deleteButtonInner.classList.add('fas');
    deleteButtonInner.classList.add('fa-times');
    deleteButton.id = `${DELETE_CARD_BUTTON_ID_PREF}${this.id}`;
    deleteButtonInner.id = `${DELETE_CARD_BUTTON_ID_PREF}${this.id}`;
    deleteButton.appendChild(deleteButtonInner);
    deleteButton.classList.add('card--delete_button');

    const editButton = document.createElement('button');

    const editButtonInner = document.createElement('i');
    editButtonInner.classList.add('fas');
    editButtonInner.classList.add('fa-pen');

    editButton.id = `${EDIT_CARD_BUTTON_ID_PREF}${this.id}`;
    editButtonInner.id = `${EDIT_CARD_BUTTON_ID_PREF}${this.id}`;

    editButton.appendChild(editButtonInner);
    editButton.classList.add('card--edit_button');

    const textarea = document.createElement('textarea');
    textarea.classList.add('card--input');

    textarea.id = `${CARD_CONTENT_ID_PREF}${this.id}`;

    if (this.content) {
      textarea.value = this.content;
      const hiddenDiv = document.getElementsByClassName('card--input-div')[0];
      hiddenDiv.innerText = this.content;
      textarea.style.height = `${hiddenDiv.offsetHeight}px`;
    } else {
      textarea.placeholder = 'Enter a title for this card...';
    }

    textarea.readOnly = true;

    dragAndDropCard(card);

    card.appendChild(textarea);
    card.appendChild(deleteButton);
    card.appendChild(editButton);

    return card;
  }
}

export default Card;
