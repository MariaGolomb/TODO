import {
  CARD_CONTENT_ID_PREF,
  CARD_ID_PREF,
  DELETE_CARD_BUTTON_ID_PREF,
  EDIT_CARD_BUTTON_ID_PREF,
} from '../../constants';
import Button from '../elements/Button';

const drawCard = cardData => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = `${CARD_ID_PREF}${cardData.id}`;
  card.draggable = true;

  const deleteButton = document.createElement('i');
  deleteButton.classList.add('fas');
  deleteButton.classList.add('fa-times');
  deleteButton.id = `${DELETE_CARD_BUTTON_ID_PREF}${cardData.id}`;
  deleteButton.classList.add('card--delete_button');
  deleteButton.classList.add('hideItem');

  const editButton = document.createElement('i');
  editButton.classList.add('fas');
  editButton.classList.add('fa-pen');
  editButton.id = `${EDIT_CARD_BUTTON_ID_PREF}${cardData.id}`;
  editButton.classList.add('card--edit_button');
  editButton.classList.add('hideItem');

  const textarea = document.createElement('textarea');
  textarea.classList.add('card--input');

  textarea.id = `${CARD_CONTENT_ID_PREF}${cardData.id}`;

  if (cardData.content) {
    textarea.value = cardData.content;
    const hiddenDiv = document.getElementsByClassName('card--input-div')[0];
    hiddenDiv.innerText = cardData.content;
    textarea.style.height = `${hiddenDiv.offsetHeight}px`;
  } else {
    textarea.placeholder = 'Enter a title for this card...';
  }

  textarea.readOnly = 'readonly';

  textarea.addEventListener('focus', () => {
    console.log(deleteButton.classList);
    deleteButton.classList.remove('hideItem');
    console.log(deleteButton.classList);

    editButton.classList.remove('hideItem');
  });

  card.addEventListener('mouseleave', () => {
    deleteButton.classList.add('hideItem');
    editButton.classList.add('hideItem');
  });

  card.appendChild(textarea);
  card.appendChild(deleteButton);
  card.appendChild(editButton);

  return card;
};

export default drawCard;

class CardDisplay {
  constructor(card) {
    this.card = card;
  }

  drawCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `${CARD_ID_PREF}${this.card.id}`;
    card.draggable = true;

    const deleteButton = new Button(`${DELETE_CARD_BUTTON_ID_PREF}${this.card.id}`, 'x').createButton();

    const textarea = document.createElement('textarea');
    textarea.classList.add('card--input');
    textarea.id = `${CARD_CONTENT_ID_PREF}${this.card.id}`;
    if (this.card.content) {
      textarea.value = this.card.content;
    } else {
      textarea.placeholder = 'Enter a title for this card...';
    }
    card.appendChild(textarea);
    card.appendChild(deleteButton);

    return card;
  }
}
